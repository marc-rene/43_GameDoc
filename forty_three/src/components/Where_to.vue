<template>
    <div class="index">

        <div class="main_grid">
            <div class="span_all">
                <hr>
                <h1>
                    A First-Person, Action, Roleplaying, Non-Linear Adventure...
                </h1>
                <hr>
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
    setTimeout(() => {
        this
    }, 2000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body
{
    background: rgb(30, 25, 25);
    height: 100%;
    margin: 0;
}



hr{
    border: 2px dashed aliceblue;
}
.index {
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
        rgb(30,30,30);
    height: 100%;
    color: aliceblue;
    width: 100vw;
    padding: 0;
    display: grid;
    place-items: center;
    
    background-size: 35px, 100%;
}

.main_grid {
    bottom: 0;
    margin: 0;
    padding: 0;

    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0;
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
    font-size: 4vw;
    font-weight: 100;
    padding-left: 10vw;
    padding-right: 10vw;
    vertical-align: top;
    text-transform: uppercase;
    z-index: 5;
}

.grid_item {
    min-height: 50vh;
    width: 33.33vw;
    transition: 0.3s;
    vertical-align: middle;
    display: grid;
    place-items: center;
}


.grid_item>h3 {
    font-size: 3vw;
    width: 100%;
    text-transform: uppercase;
}
.grid_item:hover {
    opacity: 0.9;
    border-radius: 40px;
    filter: contrast(1.5);
    transform: scaleX(1.02);
    font-size: 1vw !important;
    cursor: pointer !important;
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

.grid_item:nth-child(4)>h3 {
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>
