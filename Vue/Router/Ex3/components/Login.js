export default {
    template : `
    <div>
    <div class="mb-3">
        <label for="userId" class="form-label">아이디</label>
        <input type="email" class="form-control" id="userId" placeholder="아이디를 입력하세요" v-model="userId">

    <div class="mb-3">
        <label for="password" class="form-label">패스워드</label>
        <input type="password" class="form-control" id="password" placeholder="패스워드를 입력하세요" v-model="password">
    </div>

    <div class="d-grid gap-2">
    <button class="btn btn-primary" type="button" @click="login">로그인</button>
    </div>  
    </div>
    `,

    data : function () {
        return {
            userId : '',
            password : ''
        }
    },
    methods : {
        login () {
            alert(this.userId + " " + this.password);
        }
    }
}