## Instructions

Hi. We like to code, and we want to hire people like us. Please read these instructions carefully and follow them the best you can. If you get stuck email us--there's a ```mailto:``` link at the bottom of these instructions to do that.

1. Fork this repository into your own GitHub space.
2. Solve the problem below, checking in to your fork as you go as if this were a real project you're working on. Note that we're also testing your familiarty with GIT.
3. Submit a pull request back to this repository with your solution when finished.

## 10 Substrings

A 10-substring of a number is a substring of its digits that sum to 10. For example, the 10-substrings of the number 3523014 are:

**352**3014
3**523**014
3**5230**14
35**23014**

A number is called 10-substring-friendly if every one of its digits belongs to a 10-substring. For example, 3523014 is 10-substring-friendly, but 28546 is not.

Write a performant program that discovers all the 10-substring-friendly numbers between 0 and N, where N is an arbitrary input. Some hints:

- This problem has no data dependencies--so it's possible to parallelize the search.
- Solve the problem naively and optimize from there.
- Try to use good, readable style.
- The timebox exists to encourage small, concise, and appropriately engineered solutions, but don't get too stressed on the deadline: it's not a hard stop. It's better to go over by 30 minutes and produce excellent, robust code than check in a partially working solution with no tests.

Examples:

```
N = "0"
[] // Empty Array

N = "19"
[19]

N = "ACD42"
[] // Empty array

N = 100
[19, 28, 37, 46, 55, 64, 73, 82, 91]
```

### Architecture

In order to build this solution, please use an N-Tiered approach. We'd like to see a simple UI where we can input a string that will be processed, and then view the output on the same page. It is recommended that you utilize an asychronous mechanism for displaying the value--page refreshes are not a great user experience.

On the backend, you may choose any technology you like to implement the substring processing--but we do expect it to be a RESTful architecture utilizing HTTP as the requesting mechanism.

### If you finish the solution with lots of time left:

- Think of ways to make it faster. Implement performance improvements.
- Consider threading and parallelization.
- Did you write a quick and dirty solution? Now abstract it a bit more and make it elegant and reusable.
- Do you have enough test coverage? Write some load tests if you've run out of unit test targets.

### Rules of the game:

1. You can use any existing frameworks in the programming language of choice.
2. You may pick which user interface you want to use without penalty.
3. We expect unit tests in the appropriate framework of your choice. If you're using a more exotic programming language or feature set, please provide instructions on how to run your tests. We will be running them. Writing zero tests is a fairly huge penalty.

Hope you have fun, and please email all questions to: code@imaginexconsulting.com.