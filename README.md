## 数组

### 1、两数之和

解题思路：哈希表

1、解法一: 暴力破解法

让目标值减去其中一个值，拿着差去数组中查找匹配是否存在，如果存在则返回下标。

- 时间复杂度:两个 for 循环，时间复杂度为 O(n²);
- 空间复杂度:不需要借助额外的内存空间，空间复杂度为O(1);

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

### 18、四数之和

同样和 3 sum 相同的解题思路，只不过增加了一层 for 循环，定位两个指针后，然后移动另外两个指针，找出目标值。

几个边界条件：

- nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target 时，无论左右指针如何移动，找不到任何满足条件的值。
- num[i] = num[i - 1] 当前值和前一个值重复，寻找的值也会重复，所有跳过。
- sum = target 时，左右指针移动也会存在重复的值。
  - nums[L] = nums[L + 1],让 L++ 继续寻找下一个匹配的值 
  - nums[R] = nums[R - 1],让 R-- 继续寻找下一个匹配的值 

- 时间复杂度:需要嵌套循环两次，时间复杂度为 O(n²);
- 空间复杂度:不需要额外的内存空间，空间复杂度为 O(1);

### 88、合并两个数组

解题思路：

声明三个指针，其中两个指针指向的最短数组的末尾，然后一个个比较大小，如果大的数据，直接拼接在末尾。

边界条件：

如果 num1 提前遍历完成，就将 nums2 剩余的添加到 nums1 前，否则，nums1 本来就在前方原地不动。


- 时间复杂度: 需要遍历 n+m 个数据，时间复杂度为 O(n+m)
- 空间复杂度:不需要额外的内存空间，时间复杂度为 O(1)


## 链表


### 83、删除排序链表中的重复元素 I

>实例：
>输入: 1->2->3->3->4->4->5
>输出: 1->2->3->4>5

循环当前链表，判断当前指针是否和下一个指针相同，如果相同，则将当前指针指向下一个的下一个指针。然后循环此操作，直到不满足当前结点为 null 和 cur.next 为 null 为止。


### 83、删除排序链表中的重复元素 II

>实例：
>输入: 1->2->3->3->4->4->5
>输出: 1->2->5

哨兵思想:

对于重复的元素要全部删除，但是前提是知道前驱节点，如果是头部重复的话，就没有前驱节点，所以要设置一个哨兵。

边界条件:

- 0 个结点或者一个结点，直接返回头结点。

实现思路：

借助之前的删除重复结点的实现思路，对齐进行改进，当前结点的下一节点和下下结点存在时，就遍历整个结点，如果当前结点下一结点和下下结点的值相同，则对内进行遍历，是否后边的也相同，然后开始进行同样的删除操作。

### 141.环形链表

方法一:哈希表

每遍历一个值，就在哈希表中判断是否包含该值，如果包含，则存在环，否则，将该值存进哈希表。

- 时间复杂度: O(n)。需要遍历 n 个结点，哈希表的查询只花费 O(1) 的时间。
- 空间复杂度: O(n)。需要额外开辟 n 大小的内存空间。


方法二:双指针(快慢指针)

我们初始化两个指针，一个快指针，一个慢指针。快指针一次走两步，慢指针一次走一步。如果链表存在环，一定会在某一个点相遇; 如果快指针指向 null，则说明链表中不存在环。(注意边界条件)


- 时间复杂度: O(n)。需要遍历 n 个结点，哈希表的查询只花费 O(1) 的时间。
- 空间复杂度: O(1)。不需要额外的内存空间。


## 栈和队列

- 栈向队列的转化
- 双端队列
- 优先队列

### 20.有效的括号

括号的匹配，直接借助栈的对称性和顺序性(先进后出)进行检查括号匹配。

- 时间复杂度: O(n)。需要遍历 n 个字符，哈希表的查询只花费 O(1) 的时间。
- 空间复杂度: O(n)。开辟栈空间，最坏的情况下，需要将n 个字符推入栈中。


### 739、每日温度

太巧妙了:

维护一个递减栈，每当进栈一个元素，然后判断和当前栈顶元素大小关系怎么样的，如果大于栈顶元素，我们就弹出当前栈顶，然后通过索引相减，求出天数。否则直接进栈。

- 时间复杂度: O(n)。需要遍历所有元素，时间复杂度为 O(n)。
- 空间复杂度: O(n)。需要开辟 n 大小的内存栈空间。


### 155、最小栈

该题的关键部分主要在于 getMin() 获取最小值操作上，如果按照传统的思路去做，执行 getMin() 方法会循环遍历整个栈数据，找出最小值，那么时间复杂度为O(n)。

怎么将时间复杂度缩小到 O(1) 呢？

如果声明一个全局的变量存储最小值的话，当这个值被移除之后，无法得知第二个最小值，所以我们需要维护一个【递减栈】，每进栈一个元素就判断当前栈顶的最小元素和当前进栈元素的大小关系，如果进栈元素比栈顶元素小，则进栈，否则不进栈。

当我们开始执行 getMin 方法时，我们直接取这个递减栈的栈顶元素就 Ok 了。


### 232. 用栈实现队列

栈的特点是先进后出，队列的特点是先进先出，正好相反，要想用栈实现队列，需要两个栈。一个栈必须是进队列，另一个栈需要专门负责出队列。

每当出队列时，就将 stack1 的数据倒序输出到 stack2 中，每当出队列时，就判断当前 stack2 是否有数据，如果没有就 stack1 输出到 stack2 ，否则直接输出 stack2。

### 239.滑动窗口最大值

方案一:暴力破解法(双指针 + 遍历)

声明两个指针，分别指向窗口的开始值和结束值，然后每移动一个窗口，就遍历窗口中的值，然后找出最大值。

- 时间复杂度：O(kn)。滑动窗口会走 n - k 次，加上第一次，也就是 n - k + 1。每次都要遍历 k 个元素，所以时间复杂度为 O(kn);

方案二:双端队列法

- 维护一个递减队列。遍历的当前元素大于队列中的最后元素时，所有的元素都出队。

- 当前元素进队。

- 如果存储的当前最大元素已经在滑动窗口之外，就出队。

- 当初始化完窗口内的值，才开始存储最大值。


## DFS / BFS

### 102. 二叉树的层序遍历(广度优先遍历)


每遍历一层，就要存储下一层的结点，下一结点都是通过上一层找到的。


## 递归

### 46.全排列

全排列问题，涉及到需要穷举所有的情况，穷举可能使用深度优先遍历，深度优先遍历会使用到递归，递归解决本题。

先找到终止条件，终止条件是当前遍历的元素个数已经到达最大值，我们就对当前的排列进行存储。

然后通过 for 循环，我们开始对其进行每层元素的递归。

