---
layout: post
title:  "Optimization Technique for Deep Learning Model"
date:   2017-08-29 23:39:39 -0700
categories: deeplearning
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

In order to train a deep neural network model, the difference between local and global structure actually means a lot. For example, let's think of a parameter space in $$\mathbb{R}^n$$ which $$n$$ is fairly large. It can be very difficult for a gradient-based optimization algorithm to make a step if the cost function at the current point in the parameter space is poorly conditioned.

[_QUALITATIVELY CHARACTERIZING NEURAL NETWORK OPTIMIZATION PROBLEMS_][goodfellow-2015] argues that most of the runtine of training is due to the length of the trajectory needed to arrive at the solution. This challenge in optimizing the cost function due to global structure can't be solved fundamentally by simply using good initialization schemes. This introduces us new techniques which are called: **continuation method** and **curriculum learning**.

The idea of continuation method and curriculum learning is to create a learning process by first learning simple concepts and then progress to learning more complex concepts that depen on these simple concepts.
Mathematically, to minimize a cost function $$J(\mathbf{\theta})$$, you create new cost functions $$\{J^{(0)}, \ldots, J^{(n)}\}$$, with $$J^{(0)}$$ being the easiest to minimize and $$J^{(n)}$$ being the hardest to minimize. Here, you can think of easiness to minimize as the cost function that does not have poorly conditioned local structure; for example, a convex cost function would be easy to minimize as it does not have local minimum.

[This paper][bengio-2009] describes the curriculum learning method.
TO BE CONTINUED..

[goodfellow-2015]: https://arxiv.org/pdf/1412.6544.pdf
[bengio-2009]: https://ronan.collobert.com/pub/matos/2009_curriculum_icml.pdf