import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

window.onload = async () => {
    const xs = [1, 2, 3, 4];
    const ys = [1, 3, 5, 7];

    tfvis.render.scatterplot(
        { name: 'Linear Regression dataset' },
        { values: xs.map((x, i) => { return { x, y: ys[i] } }) },
        { xAxisDomain: [0, 5], yAxisDomain: [0, 8] }
    );

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    //0.1 is the learning rate
    model.compile(
        {
            loss: tf.losses.meanSquaredError,
            optimizer: tf.train.sgd(0.1)
        }
    );

    const inputs = tf.tensor(xs);
    const labels = tf.tensor(ys);
    await model.fit(inputs, labels,
        {
            batchSize: 4,
            epochs: 200,
            callbacks: tfvis.show.fitCallbacks(
                { name: 'Training Process' },
                ['loss']
            )
        }
    );

    const output = model.predict(tf.tensor([5]));
    alert(`if x is 5, then the prediction of y from this model is ${output.dataSync()[0]}`);
}