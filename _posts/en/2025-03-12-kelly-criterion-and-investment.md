---
title: "The Kelly criterion and risk control"
excerpt: "Position sizing, drawdowns, and the limits of a simplified model."
lang: en
---

Imagine a gambler who bets on horse races using inside information received by telephone. Unfortunately, the information is unreliable. The line may be unclear, or the tip itself may be wrong. The gambler has a probability $p$ of winning, with net odds $b$: for each unit staked, the gambler either loses the stake or wins $b$ units. How should the gambler allocate capital to avoid losses?

In the 1950s, John Larry Kelly developed the Kelly formula. It gives the fraction of capital used to maximize expected growth: $f=\frac{bp-q}{b}$, where $q=1-p$.

One limitation of this setup is that the outcome is either a gain of $b$ or the loss of the entire stake. This does not fit a trade with a stop-loss. Consider an extension in which each trade can lose at most 5%, while a winning trade returns 10% before closing. How much capital should be committed to maximize long-term growth?

Without loss of generality, let initial capital equal 1 and let $f$ represent the amount invested. A winning outcome leaves $1+fb$, while a losing outcome leaves $1-fc$. With a 5% stop-loss and a 10% take-profit, $b=0.1$ and $c=0.05$. The outcomes are:

| Probability | Resulting capital |
| --- | --- |
| $p$ | $1+fb$ |
| $q$ | $1-fc$ |

Maximize expected logarithmic growth:

$$E=p\log(1+fb)+q\log(1-fc)$$

Differentiate with respect to $f$:

$$
\frac{dE}{df}=\frac{pb}{1+fb}-\frac{qc}{1-fc}
$$

Setting the derivative to zero gives:

$$
\frac{pb}{1+fb}=\frac{qc}{1-fc}
$$

Rearranging:

$$
f = \frac{p}{c} - \frac{q}{b}
$$

We can call this an extended Kelly formula for situations where a losing trade does not lose its entire stake.

Suppose a 10% return is considered achievable with a 50% chance of success, and the stop-loss is 5%. Then $p=q=0.5$, $b=0.1$, and $c=0.05$.

$$
f=5
$$

The Kelly formula is telling us to invest at five times our capital!

In the best outcome of this trade, taking a 10% profit would return 50% of the account's capital. That sounds attractive. But a 5% loss would produce a 25% account drawdown. This calculation does not even include the additional complications of leverage. With a 50% win rate, such a concentrated position clearly creates large account swings and means passing up most other market opportunities. After several 25% drawdowns, it becomes difficult to recover.

The formula reveals traps in a simplified position-sizing model:

1. The margin of safety is too small and the risk too large. Early price fluctuations can be much larger than the profit so far, pushing the investor out of the strategy and into a stop-loss.
2. Expected profit is easy to overestimate. Conditions may change, and the anticipated 10% return may never arrive.

Applying the Kelly criterion to investing requires attention to:

1. Reasonable volatility that does not undermine the investor's ability to hold the position.
2. Reasonable leverage, with room to diversify capital.
3. Reasonable losses and a margin of safety. Leverage weakens that margin, increasing expected losses together with expected gains.
4. A reasonable stop-loss. A threshold that is too tight can close positions during ordinary fluctuations and invalidate the assumed 50% win rate.

The lesson is simple: loss is the most important factor in an investment decision. Decisions depend on how we understand losses and how much we can bear.

1. The stop-loss determines what level of volatility I can invest in.

   If I can accept a maximum loss of only 5% on a position, an asset that moves more than 5% within a day is clearly unsuitable. Short-term movements can quickly trigger the stop-loss and cause me to miss a later rise.

2. Every investment decision must account for loss.

   Loss means a judgment was wrong, and a mistaken trade produces a loss. Even when I feel very confident that a trade will be profitable, I cannot avoid asking: if I am wrong, can I recover from the consequences? Losing half of one's capital in a single trade is unacceptable to me and to most people, especially without confidence in our ability to judge the market accurately.

Put simply, maximizing expected growth with the Kelly formula also maximizes the risk of the strategy. In the original version, a losing bet loses its entire stake. Adding a proportional stop-loss allows the invested amount $f$ to grow, but it also increases exposure to loss. The extended formula does not provide a better risk-return relationship. When a position rises and we imagine adding more at a higher price, we often overlook the potential loss. As the price rises, risk increases while the remaining return decreases.

The Kelly criterion's main lesson here is that drawdown risk, rather than expected return, should determine position size.
