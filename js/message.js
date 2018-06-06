!function () {
    var view = document.querySelector("#siteMessage");

    var model = {
        init:function (data) {
            AV.init(data)
        },
        get: function () {
            var query = new AV.Query('Messages');
            return query.find();
        },
        save: function (inputMessage) {
            var Messages = AV.Object.extend('Messages');
            var message = new Messages();
            message.save({
                name: inputMessage.name,
                content: inputMessage.content,
            })
        }
    }

    var controller = {
        view: null,
        form: null,
        model: null,
        avInfo:{
            appId: 'dBiiz9LeNIyQjCkyCCqbhF2e-gzGzoHsz',
            appKey: 'uIh8KspCAegHJ78l58DpPzUV'
        },
        message: null,

        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.form = view.querySelector("form")
            this.model.init(this.avInfo);
            this.bindEvent();
            this.loadHistoryMessage();

        },

        bindEvent: function () {
            var form = this.form;
            form.addEventListener("submit", (e)=> {
                e.preventDefault();
                this.getInputMessage()
                this.saveInputMessage();
            })
        },

        getInputMessage: function () {
            var content = this.form.querySelector("input[name=content]").value;
            var name= this.form.querySelector("input[name=name]").value;
            this.message = {
                name: name,
                content: content,
            }
        },

        saveInputMessage: function () {
            var {name, content} = this.message;
            if(name && content){
                this.model.save(this.message);
                this.reloadMessage();
            }else {
                alert("请填入完整的信息");
            }

        },

        reloadMessage: function () {
            var message = this.message;
            var ol = this.view.querySelector(".messageList");
            var li = document.createElement("li");
            li.innerHTML = `${message.name} : ${message.content}`;
            ol.append(li);
        },

        loadHistoryMessage: function () {
            this.model.get().then((m) => {
                let array = m.map((item)=> item.attributes);
                array.reverse().forEach((item)=>{
                    var li = document.createElement("li");
                    li.innerHTML = `${item.name} : ${item.content}`;
                    this.view.querySelector(".messageList").append(li);
                })
            })
        }

    }

    // var TestObject = AV.Object.extend('TestObject');
    // var testObject = new TestObject();
    // testObject.save({
    //     words: 'Hello World!'
    // }).then(function(object) {
    //     alert('LeanCloud Rocks!');
    // })

    controller.init(view, model)
}.call()