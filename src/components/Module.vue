<template>
    <div class="module">
        <div class="index_group_tit">
            <div class="group_profits">
                <img class="img" src="https://qimage.owhat.cn/prod/user/avatar/c68e89c1-1b8c-3bf2-b5c4-eb0b2e1ae5fb1538298727234.jpeg?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200" alt="">
            </div>
            <div class="group_tit">
                Owhat偶像志
            </div>
            <p>O妹出品</p>
        </div>
        <div class="index_group_con">
            <img class="image" src="https://qimage.owhat.cn/prod/shop/cover/1562674943555.jpg?imageMogr2/auto-orient/thumbnail/!750x480r/gravity/Center/quality/80/crop/750x480" alt="">
            <span class="brief_mask"></span>
            <div class="group_intro">
                BlackACE电子刊7月10日11:00正式上线
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name:"Module",
    components:{

    },
    data(){
        return {
        }
    },
}
</script>

<style lang="" scoped>
.moudle{
    margin: 0 0 10px 0;
    padding: 0;
    background: #fff;
}
.index_group_tit{
    display: -webkit-box;
    padding: 20px 16px 12px;
font-size: 14px;
line-height: 30px;
}
.group_profits{
    width: 30px;
height: 30px;
margin: 0 7.5px 0 0;
position: relative;
padding: 0
}
.img{
    border-radius: 50%;
    width: 100%;
vertical-align: top;
display: block;
}
.group_tit{
    -moz-box-flex: 1;
    overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin: 0;
padding: 0;
}
.index_group_tit>p{
    font-size: 14px;
color: #8E8E93;
margin:0 0 0 47px;
padding: 0;
}
.index_group_con{
    position: relative;
width: 100%;
height: 240px;
overflow: hidden;
margin: 0 auto;
padding: 0;
}
.image{
    height: 100%;
object-fit: cover;
width: 100%;
vertical-align: top;
display: block;
}
.brief_mask{
    display: inline-block;
width: 100%;
height: 146px;
position: absolute;
bottom: 0;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.34) 51%, rgba(0, 0, 0, 0));
background: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.32));
left: 0;
z-index: 1;
}
.group_intro{
    font-size: 25px;
color: #fff;
text-align: center;
font-weight: 600;
max-height: 62px;
position: absolute;
bottom: 0.2rem;
padding: 0 16px;
width: 100%;
-webkit-box-sizing: border-box;
z-index: 1;
word-break: break-all;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box !important;
-webkit-box-orient: vertical;
margin: 0;
}
</style>