### 1、两数之和

解题思路：哈希表

1、解法一: 暴力破解法

让目标值减去其中一个值，拿着差去数组中查找匹配是否存在，如果存在则返回下标。

- 时间复杂度:两个 for 循环，时间复杂度为 O(n²);
- 空间复杂度:不需要借助额外的内存空间，空间复杂度为O(n);

2、解法二:两遍哈希表

为了能够优化时间复杂度，需要牺牲空间，来优化时间。要想优化数组的遍历，首先想到的要快速找到目标对应的值，也就是借助哈希表能够将值映射为索引。

- 时间复杂度:遍历一遍数组，时间复杂度为O(n);
- 空间复杂度:需要额外的哈希表存储数据，空间复杂度为O(n);

3、解法三:一遍哈希表

我们可以减少为一次遍历就能

- 时间复杂度:遍历一遍数组，时间复杂度为O(n);
- 空间复杂度:需要额外的哈希表存储数据，空间复杂度为O(n);

### 2、两数相加

解题思路：数学运算

根据数学运算，从个位开始运算, 如果满 10 则进 1，保存，下一轮会加上，满 10 的要进行取模运算。

### 3、无重复字符的最长子串

解题思路：滑动窗口

设置一个滑动队列，每当队列进入一个字符，就判断当前的字符是存在当前队列中，如果不存在，就加入队列中，并统计当前的长度；如果存在，则删除队列中该字符前的所有字符。

如：abcabcbb

 - [a]：计数 + 1 = 1
 - [ab]：计数 + 1 = 2
 - [abc]：计数 + 1 = 3
 - [abca]:存在相同字符，窗口要往右滑动，变为 [bca] = 3
 - 循环此过程

性能分析：

- 时间复杂度：遍历一遍所有字符串即可，为 O(n)
- 空间复杂度：需要一个额外空间大小的 m 作为滑动窗口队列，所以空间复杂度取决于 m 的大小，所以空间复杂度为 O(m).


### 15、三数之和

解法一: 暴力破解法

先固定两个数，然后循环找第三个数，直到找出所有情况符合为止。

性能分析:

- 时间复杂度:需要遍历所有的情况，时间复杂度为 O(n^3);
- 空间复杂度:不需要额外的内存空间，空间复杂度为 O(1);


解法二:哈希表优化

按照两数之和的思想，先找到两个数，对于第三个数，需要借助哈希表查找(映射特性)，从 O(1) 时间内找出第三个数。

- 时间复杂度:需要嵌套循环两次，时间复杂度为 O(n²);
- 空间复杂度:需要额外 n 大小的哈希表空间，空间复杂度为 O(n);

>注意:以上解法存在好多问题，比如没有去重。

解法三：排序 + 双指针(去重)

根据选择组合的特点，三者中要么两个弱者配一个强者，要么三个势力均衡。同时要优化一些特殊的组合(三个正整数)。同时对结果中的数据进行去除重操作。

1、先对数组进行排序

2、然后固定一个数，声明两个指针，分别指向最大值和最小值

3、如果当前和小于 0,左指针右移动，否则右指针左移动。

4、各种去重判断和边界条件优化。

几个边界条件：

- num[i] > 0 时，无论左右指针如何移动，找不到任何满足条件的值。
- num[i] = num[i - 1] 当前值和前一个值重复，寻找的值也会重复，所有跳过。
- sum = 0 时，左右指针移动也会存在重复的值。
  - nums[L] = nums[L + 1],让 L++ 继续寻找下一个匹配的值 
  - nums[R] = nums[R - 1],让 R-- 继续寻找下一个匹配的值 


- 时间复杂度:需要嵌套循环两次，时间复杂度为 O(n²);
- 空间复杂度:不需要额外的内存空间，空间复杂度为 O(1);