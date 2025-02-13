---
id: cookbooks-deduplication
title: Message deduplication
sidebar_label: "Message deduplication "
description: Get a comprehensive understanding of working principle and configuration methods of message deduplication in Pulsar.
---


````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````



Message deduplication could affect the performance of the brokers during informational snapshots.

To use message deduplication in Pulsar, you need to configure your Pulsar brokers, namespaces, or topics. It is recommended to modify the configuration in the clients, for example, setting send timeout to infinity.

## How message deduplication works

You can enable or disable message deduplication at broker, namespace, or topic level. By default, it is disabled on all brokers, namespaces, or topics. You can enable it in the following ways:

* Enable deduplication for all namespaces/topics at the broker level.
* Enable deduplication for a specific namespace with the `pulsar-admin namespaces` interface.
* Enable deduplication for a specific topic with the `pulsar-admin topics` interface.

## Configure message deduplication

You can configure message deduplication in Pulsar using the [`broker.conf`](reference-configuration.md#broker) configuration file. The following deduplication-related parameters are available.

Parameter | Description | Default
:---------|:------------|:-------
`brokerDeduplicationEnabled` | Sets the default behavior for message deduplication in the Pulsar broker. If it is set to `true`, message deduplication is enabled on all namespaces/topics. If it is set to `false`, you have to enable or disable deduplication at the namespace level or the topic level. | `false`
`brokerDeduplicationMaxNumberOfProducers` | The maximum number of producers for which information is stored for deduplication purposes. | `10000`
`brokerDeduplicationEntriesInterval` | The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed). | `1000`
`brokerDeduplicationSnapshotIntervalSeconds`| The time period after which a deduplication informational snapshot is taken. It runs simultaneously with `brokerDeduplicationEntriesInterval`. |`120`
`brokerDeduplicationProducerInactivityTimeoutMinutes` | The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer. | `360` (6 hours)

### Set default value at the broker-level

By default, message deduplication is *disabled* on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the `brokerDeduplicationEnabled` parameter to `true` and restart the broker.

Even if you set the value for `brokerDeduplicationEnabled`, enabling or disabling via Pulsar admin CLI overrides the default settings at the broker level.

### Enable message deduplication at namespace or topic level

Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the [`pulsar-admin namespaces set-deduplication`](pathname:///reference/#/@pulsar:version_reference@/pulsar-admin/namespaces?id=set-deduplication) or the [`pulsar-admin topics set-deduplication`](pathname:///reference/#/@pulsar:version_reference@/pulsar-admin/topics?id=set-deduplication) command. You can use the `--enable`/`-e` flag and specify the namespace/topic.

The following example shows how to enable message deduplication at the namespace level.

```bash
bin/pulsar-admin namespaces set-deduplication \
public/default \
--enable # or just -e
```

### Disable message deduplication at namespace or topic level

Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the [`pulsar-admin namespace set-deduplication`](pathname:///reference/#/@pulsar:version_reference@/pulsar-admin/namespaces?id=set-deduplication) or the [`pulsar-admin topics set-deduplication`](pathname:///reference/#/@pulsar:version_reference@/pulsar-admin/topics?id=set-deduplication) command. Use the `--disable`/`-d` flag and specify the namespace/topic.

The following example shows how to disable message deduplication at the namespace level.

```bash
bin/pulsar-admin namespaces set-deduplication \
public/default \
--disable # or just -d
```

## Pulsar clients

If you enable message deduplication in Pulsar brokers, namespaces, or topics, it is recommended to make the client retry infinitely the messages until it succeeds, otherwise it is possible to break the ordering guarantee as some requests may time out and the application does not know whether the request is successfully added to the topic or not.

So you need to complete the following tasks for your client producers:

1. Specify a name for the producer.
1. Set the message timeout to `0` (namely, no timeout).

The instructions for Java, Python, and C++ clients are different.

````mdx-code-block
<Tabs
  defaultValue="Java clients"
  values={[{"label":"Java clients","value":"Java clients"},{"label":"Python clients","value":"Python clients"},{"label":"C++ clients","value":"C++ clients"}]}>
<TabItem value="Java clients">

To ensure the guarantee order on a [Java producer](client-libraries-java-use/#create-a-producer) sending to a topic with message deduplication enabled, set the producer name using the `producerName` setter, and set the timeout to `0` using the `sendTimeout` setter.

```java
import org.apache.pulsar.client.api.Producer;
import org.apache.pulsar.client.api.PulsarClient;
import java.util.concurrent.TimeUnit;

PulsarClient pulsarClient = PulsarClient.builder()
        .serviceUrl("pulsar://localhost:6650")
        .build();
Producer producer = pulsarClient.newProducer()
        .producerName("producer-1")
        .topic("persistent://public/default/topic-1")
        .sendTimeout(0, TimeUnit.SECONDS)
        .create();
```

</TabItem>
<TabItem value="Python clients">

Not to break the guarantee order on a [Python producer](client-libraries-python-use.md#create-a-producer) sending to a topic with message deduplication active, set the producer name using `producer_name`, and set the timeout to `0` using `send_timeout_millis`.

```python
import pulsar

client = pulsar.Client("pulsar://localhost:6650")
producer = client.create_producer(
    "persistent://public/default/topic-1",
    producer_name="producer-1",
    send_timeout_millis=0)
```

</TabItem>
<TabItem value="C++ clients">
Not to break the guarantee order on a [C++ producer](client-libraries-cpp-use.md#create-a-producer) sending to a topic with message deduplication active, set the producer name using `producer_name`, and set the timeout to `0` using `send_timeout_millis`.

```cpp
#include <pulsar/Client.h>

std::string serviceUrl = "pulsar://localhost:6650";
std::string topic = "persistent://some-tenant/ns1/topic-1";
std::string producerName = "producer-1";

Client client(serviceUrl);

ProducerConfiguration producerConfig;
producerConfig.setSendTimeout(0);
producerConfig.setProducerName(producerName);

Producer producer;

Result result = client.createProducer(topic, producerConfig, producer);
```

</TabItem>

</Tabs>
````

