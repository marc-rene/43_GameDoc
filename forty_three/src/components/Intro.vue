<template>
    <div class="main_container">
        <video autoplay muted preload="auto" id="actual_vid">
            <source src="../assets/video/ink_drop_2_depressed.mp4" type="video/mp4">
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
        }
    }
/*
let video_ref = document.getElementById("actual_vid");

video_ref.onended()
{
    console.log("Looping");
    video_ref.currentTime =4;
}*/

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_container {
    color: black;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: -10;
    animation: get_smaller 80s ease-in-out forwards;
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
    min-width: 100%;
}

@keyframes get_smaller 
{
    0%      { letter-spacing: 3vw;      color: black;   }
    20%     { letter-spacing: 1vw;      color: white;   }    
    100%    { letter-spacing: 2vw;      color: rgb(192, 0, 0);   }    
}



</style>
