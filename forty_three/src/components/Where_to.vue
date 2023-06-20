<template>
    <div class="index">
        <!--<div id="post_swipe">
        </div>
        <div id="pre_swipe">
            <h1>ABOUT</h1>
        </div>-->
        <div class="main_grid">
            <div class="span_all">

                <h1>
                    A First-Person, Action, Roleplaying, Linear Adventure
                </h1>
            </div>
            <div class="grid_item">
                <h3>
                    Pre-Production
                </h3>
            </div>
            <div class="grid_item">
                <h3>
                    Production
                </h3>

            </div>
            <div class="grid_item">
                <h3>
                    Sustainability
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default
    {
        name: 'WhereTo',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {

    height: 100vh;
    color: aliceblue;
    width: 100vw;
    padding: 0;
    display: grid;
    place-items: center;
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
        rgb(20, 20, 20);
    background-size: 25px, 100%;
}

.main_grid {
    margin: 0;
    margin-top: 1vw;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0;
    padding: 10px;
}

.main_grid>div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}

.span_all {
    grid-column-start: 1;
    grid-column-end: 4;
}

h1 {
    font-size: 5vw;
    font-weight: 600;
    vertical-align: top;
    z-index: 5;
}

.grid_item {
    min-height: 40vh;
    width: 100%;
    transition: 0.3s;
    vertical-align: middle;
    display: grid;
    place-items: center;
    padding: 15px;
}

.grid_item:hover {
    border-radius: 40px;
    filter: contrast(2);
    
    cursor: pointer !important;
}

.grid_item>h3 {
    font-size: 3vw;
    width: 100%;
    text-transform: uppercase;
}

/* Pre_production */
.grid_item:nth-child(2) {
    background: url(../assets/img/pre_prod.webp) no-repeat top center;
    background-size: cover;
}

.grid_item:nth-child(2)>h3 {
    color: black;
    background-color: rgba(0, 0, 0, 0.4);
}

/* production */
.grid_item:nth-child(3) {
    background: url(../assets/img/dev.jpg) no-repeat top center;
    background-size: cover;
}

.grid_item:nth-child(3)>h3 {
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.4);
}

/* post */
.grid_item:nth-child(4) {
    background: url(../assets/img/post.webp) no-repeat center center;
    background-size: cover;
}

.grid_item:nth-child(3)>h3 {
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.4);
}

</style>
