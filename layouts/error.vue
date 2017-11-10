<template>
    <div id="error">
        <main class="main-container">
            <div class="icon">
                404
            </div>
            <p class="desc">这个页面不存在哦 ╮(╯_╰)╭</p>
            <nuxt-link to="/">返回首页</nuxt-link>
        </main>
        <footer class="footer">
            <div class="copyRight">
                © 2017 NoCode &nbsp; 浙 ICP 备 17005035 号 -1
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        props: ['error']
    }
</script>
<style lang="scss" scoped>
    #error {
        text-align: center;
        .main-container {
            margin-top: 130px;
            .icon {
                width: 120px;
                height: 120px;
                border: 4px solid #5f7d8c;
                border-radius: 50%;
                margin: 0px auto;
                position: relative;
                line-height: 120px;
                font-size: 30px;
                color: #5f7d8c;
            }
            .desc {
                margin-top: 30px;
                margin-bottom: 70px;
                font-size: 18px;
                line-height: 1.5em;
                color: #a7a7a7;
                padding: 0 20px;
            }
            a {
                text-decoration: none;
                font-size: 14px;
                color: #545454;
                line-height: 1.4;
                display: block;
            }
        }
        .footer {
            margin-top: 100px;
            margin-bottom: 20px;
            color: #AAACB4;
            font-size: 13px;
            font-weight: 100;
            line-height: 1.35;
        }
    }
</style>
