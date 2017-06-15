// 1.模拟数据(把静态的任务列表数据,替换成模拟的数据)
// 任务是多条的,所以要数组,一条任务包含很多信息,所以要用对象,一个对象有多个元素
var list = [
   /* {
        title:"吃饭睡觉打豆豆"
    },
    {
        title:"学习Vue.js"
    }*/
]

// 2.实例化
new Vue({
    // 挂载点(在挂载点内可以任意使用vue的语法)
    el:".main",
    data:{
        // 任务列表数据代理
        tdlist:list,
        // 输入框的内容(默认为空)
        todo:""
    },
    methods:{
        // 自己没看视频想的
        addTodo_hs:function(){
            // 1.判断输入框内容是否为空,
            // 空就提示输入内容,不为空就添加到任务列表
            var val = document.querySelector(".task-input").value;
            if(val){
                var listTitle = {"title":val};
                this.tdlist.push(listTitle)
                // this.tdlist.push(document.querySelector(".task-input").value);
            }else{
                alert("任务内容不能为空");
            }
        },
        // 添加任务
        addTodo1:function(ev){
            // 方法1:通过keyup的值判断
             // v-on:keyup = "addTodo1"
            // keyCode属性,对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup 事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。
            if(ev.keyCode === 13){
                // 事件处理函数中的this指向的是,当前这个根实例 既Vue对象
                this.tdlist.push({
                    // target(DOM Event对象) 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
                    title:ev.target.value
                })
            }

        },
        addTodo2:function(ev){
            // 方法2:通过事件修饰符,取消判断按键
            // v-on:keyup.enter = "addTodo2"
            // v-on:keyup.13 = "addTodo2"
            this.tdlist.push({
                // target(DOM Event对象) 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
                title:ev.target.value
            })
        },
        addTodo3:function(ev){
            // 方法3:不用操作DOM的方法,不用target获取输入框的值
            // v-on:keyup.enter = "addTodo3"
            // data下添加一条对象,{todo:""},用来存取输入的内容
            // 在data里创建个todo的数据,用来代理输入框的内容
            if(this.todo){
                this.tdlist.push({
                    title:this.todo
                })
                // 添加完成,让输入框里的内容重置为空
                this.todo = "";
            }else{
                alert("请输入任务内容!");
            }
        },
        addTodo4:function(val,ev){
            // 传参只传值
            // v-on:keyup.enter = "addTodo4(123)"

            // 既传参,又把event对象传过来
            // v-on:keyup.enter = "addTodo4(123,$event)"
        },
    }
})