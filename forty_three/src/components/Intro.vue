<template>
    <div class="main_container">
        <video autoplay muted preload="auto" id="actual_vid" onended="currentTime = 30;play();">
            <source src="../assets/video/ink_drop_2_depressed_LOOP.mp4" type="video/mp4">
        </video>
        <h1>    FORTY THREE             </h1>
        <h2>    A GAME DESIGN DOCUMENT  </h2>
    </div>
</template>

<script>

export default
    {
        name: 'HomeIntro',
        props: {
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_container {
    color: black;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: -10;
    animation: get_smaller 80s ease-in-out forwards;
}
@font-face {
    font-family: scorched;
    src: url(../assets/font/ScorchedEarthDEMO-KCFonts.otf);
}
h1 
{
    position: fixed;
    margin: 0;
    padding: 0;
    height: 20vh;
    text-align: center;
    vertical-align: text-top;
    top: 40vh;
    font-family: scorched;
    width: 100%;
    font-size: 8vw;
    z-index: -9;
    min-height: 10px;
}

h2
{
    min-height: 10px;
    position: fixed;
    margin: 0;
    padding: 0;
    height: 20vh;
    text-align: center;
    vertical-align: text-bottom;
    top: 60vh;

    width: 100%;
    font-size: 2vw;
    z-index: -9;
}

#actual_vid
{
    object-fit: cover;
    z-index: -50;
    position: fixed;
    resize: none;
    padding: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}

@keyframes get_smaller 
{
    0%      { letter-spacing: 3vw;      color: white;   }
    20%     { letter-spacing: 0.8vw;    color: rgb(30,30,30);   }    
    30%     { letter-spacing: 1.1vw;    color: rgb(190, 0, 0);   }    
    100%    { letter-spacing: 2.5vw;    color: red  }    
}



</style>
