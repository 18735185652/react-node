//链表
/*
链表和数组一样，可以用于存储一系列的元素，但是列表和数组的实现机制完全不同

数组：
要存储多个元素，数组（或称为列表）可能是最常用的数据结构

缺点：
1. 数组创建通常需要申请一段连续的的内存空间（一整块的内存），并且大小是固定的（大多数编程语言都是固定的）
所以当当前数组不能满足容量需求时，需要扩容，一般情况下是申请一个更大的数组，比如2倍，然后将原数组的元素复制进去
2. 在数组开头或中间位插入数据的成本太高，需要进行大量的元素位移
3. 尽管我们学习过的JS Array类方法可以帮助我们做这些事情，但背后的原理依然是这样

链表的优势：
1. 内存的空间不是必须连续的，可以充分利用计算机的内存，实现灵活的内存动态管理
2. 链表不必再创建时就确定大小，并且大小可以无限的延伸下去
3. 链表在插入和删除数据时，时间复杂度可以达到 O(1) 相对数组效率高很多

相对于数组，链表的缺点：
1. 链表访问任何一个位置的元素时，都需要从头开始访问（无法跳过第一个元素访问任何一个元素），
2. 无法通过下标访问元素，都要从头一个个访问，直到找到对应的元素
*/



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0; //记录链表的长度
    }
    //末尾插入一个元素
    append(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            //找到最后一个节点
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            //最后一个节点的next指向新创建的节点
            current.next = newNode;
        }

        this.length += 1;
    }
    insert(position, data) {
        //对position进行边界处理 小于0或者大于链表的长度 返回false
        if (position < 0 || position > this.length) return false;
        let newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let index = 0;
            let current = this.head;
            let previsous = null;
            
            while (index++ < position) {
                previsous = current
                current = current.next;
            }
            newNode.next = current;
            previsous.next = newNode;
        }
        this.length += 1;
        return true;

    }
    //返回索引对应的元素
    get(position) {
        if (position < 0 || position >= this.length) return null;
        let index = 0;
        let current = this.head;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }
    //返回元素在列表中的索引
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1;
    }
    update(position, data) {
        if (position < 0 || position >= this.length) return false;
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = data;
        return current.data
    }
    removeAt(position) {
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let previous = null;
            let index = 0;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length -= 1;
        return current.data
    }
    remove(data) {
        let position = this.indexOf(data);
        // console.log("position",position);
        return this.removeAt(position);
    }
    toString() {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + ","
            current = current.next;
        }
        return result.slice(0, -1)
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
}

let likend = new LinkedList;

likend.append("zf");
likend.append("px");
likend.append("age");
// console.log(likend.get(1))
console.log(likend.indexOf("zf"))
console.log(likend.update(2, "name"))
console.log("removeAt", likend.removeAt(2))
console.log("remove", likend.remove("px"))
console.log(likend.toString())