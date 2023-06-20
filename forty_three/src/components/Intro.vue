<template>
    <div class="h1_top">
        <h1>FORTY THREE</h1>
        <h2 >
            A GAME DESIGN DOCUMENT
        </h2>
    </div>
    <div class="video_bg">
        <video autoplay muted preload="auto" id="actual_vid">
            <source src="../assets/ink_drop_2.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default
    {
        name: 'HomeIntro',
        props: {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1_top {
    color: white;
    width: 100vw;
    text-align: center;
    position: absolute;
    z-index: 10 !important;
    padding-top: 0;
    margin: 0;
    top: 50%;
    /* position the top  edge of the element at the middle of the parent */
    transform: translate(0, -50%);
    /* This is a shorthand of
    translateX(-50%) and translateY(-50%) */
    letter-spacing: 3vw;
    text-align: center;
    animation: get_smaller 10s ease-in-out forwards;
}
#h1_top h1 {
    font-size: 10rem;
}

/*
h2{
    color: black    !important;
    text-align: center  !important;
    position: absolute  !important;
    z-index: 10 !important;
    padding-top: 0  !important;
    margin: 0   !important;
    opacity: 1  !important;
    font-weight: 100    !important;
    font-size: 3rem   !important;
    animation-direction:    reverse ;
    animation-fill-mode:    backwards;
    
}*/
.video_bg {
    width: 100vw;
    margin-top: -100px;
    padding-top: -500px;
    z-index: -1;
    position: absolute;
    object-fit: contain;
}

@keyframes get_smaller 
{
    0%      { letter-spacing: 3vw !important;      color: white;   }
    100%     { letter-spacing: 1vw !important;      color: black;   }    
}


#actual_vid {
    width: 100%;
}
</style>
