import * as tf from '@tensorflow/tfjs';

// traditional for loop:
const input = [1, 2, 3, 4];
const w = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]];
const output = [0, 0, 0, 0];

for (let i = 0; i < w.length; i++) {
    for (let j = 0; j < input.length; j++) {
        output[i] += input[j] * w[i][j];
    }
}

console.log(output);
// is the same as:
tf.tensor(w).dot(input).print();

// const t0 = tf.tensor(1);
// t0.print();
// console.log(t0);

// // 1d tensor:
// const t1 = tf.tensor([1, 2]);
// t1.print();
// console.log(t1);

// // 2d tensor: 
// const t2 = tf.tensor([[1, 1, 1], [2, 2, 2]]);
// t2.print();
// console.log(t2);

// // 3d tensor:
// const t3 = tf.tensor([[[1, 2, 3]]]);
// t3.print();
// console.log(t3);
