import router from "../router.js"

export default  {
    template :`
    <div class="card" mt-3 >
        <img src="https://picsum.photos/1024/400/?image=42" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Cafe</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary" @click="sendMail">Send Mail</a>
        </div>
    </div>
    `
    ,
    methods : {
        sendMail() {
            let data = {
                from : 'hong@gildong.com',
                content : 'Hello ! I am gildong'
            }

            // #1. import하지 않은 경우  this.$router 를 사용
            // this.$router.push( {
            //     path : '/mail', query : data
            // })

            // #2. import된 경우 router
            // router.push ( {
            //     path : '/mail',
            //     query : data
            // })

            //#3. name 속성이 있는 route는 name으로 push 할 수 있다
            router.push ( {
                name : 'Mail',
                query : data
            })
        }
    }
}