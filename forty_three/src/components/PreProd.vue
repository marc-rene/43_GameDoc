<template>
    <div class="pre_prod_container">
        <div class="the_side">

            <a href="#actual_vid">
                <img src="../assets/logo.png" class="sidebar_logo" style=" width: 5vw; 
                            filter: invert(1); 
                            padding: 2vw;
                            min-width: 50px;">
            </a>

            <a href="javascript:void(0)" class="sidebar_item">
                My drive
            </a>
            <a href="javascript:void(0)" class="sidebar_item">
                Computers
            </a>
            <a href="javascript:void(0)" class="sidebar_item">
                Shared with me
            </a>
            <a href="javascript:void(0)" class="sidebar_item">
                Starred
            </a>
            <a href="javascript:void(0)" class="sidebar_item">
                Trash
            </a>
        </div>

        <div class="MAIN_DIV">

            <h1>Core Idea / Summary</h1>

            <section>
                <h2>
                    What is the game?
                </h2>
                <hr>
                <p>
                    <b>Forty-Three</b> is intended to be a first person, non-linear, episodic story-focused shooter.
                    <br>
                    The story will change depending on choices made by the player. Levels will prodimatiley take place in
                    the
                    same place as they normally would, but the context and challenge will be changing drastically, allowing
                    for
                    multiple playthroughs and seeing the story from multiple perspectives.
                </p>
            </section>

            <section>
                <h2>
                    What is the setting?
                </h2>
                <hr>
                <p>
                    The story of Forty-Three will take place in Arkady Strugatsky & Boris Strugatsky's' Roadside Picnic.
                    This is the same novel that the popular FPS franchise S.T.A.L.K.E.R, and the film of the same name, are
                    based on. The story will continue with the STALKER version of the story, with the dissolution of the
                    USSR due to a second nuclear disaster in Chornobyl in 2006 and the creation of “The Zone”, but will be
                    set in a diverging universe from the game.
                </p>

            </section>

            <section>
                <h2>
                    What is the Story?
                </h2>
                <hr>
                <p>
                    The Story of Forty-Three starts several years after the events of the STALKER franchise, in 2020. In the
                    story of STALKER, a group of scientists experimented with mass mind alteration, helping to lead to the
                    second meltdown. In the STALKER franchise, these scientists were killed by the player, but in
                    Forty-Three, the player joined them.
                    The player starts out in a facility as a simple cleaner, but after a disastrous enemy raid, the player
                    is separated from everyone and must survive and escape the zone any way they can. Having been labelled a
                    deserter, the player is on their own to make new allies to help them leave the zone.
                    After finally escaping, the player is called back to the facility through their dreams and dwindling
                    health. Something powerful is buried there and must either be freed or destroyed. The identity of this
                    being/object must be kept mysterious.

                </p>

            </section>


            <section>
                <h2>
                    What is the Atmosphere and feeling?
                </h2>
                <hr>
                <p>
                    The world of Forty-Three is bleak, hardcore, yet also hopeful at times. Life outside of the zone has
                    prospered due to the zone and its many. The zone is a bleak place, the feeling of decay, radiation, and
                    danger is around every corner. Between bandits, armies, STALKERs, wildlife, mutants, reality-breaking
                    artifacts, and pockets of immense radiation, the zone is as dangerous, as it is alluring and freeing.
                    Camps and friendly outposts offer a warm and safe space, in stark contrast to the cold and dangerous
                    zone.
                    The player starts off in a research facility in the zone as a cleaner. Safe from the outside, the
                    atmosphere and feeling should reflect this.
                    After the enemy raid, the player is flung into the zone at night. The bleak and dangerous atmosphere of
                    the zone will be present.
                    Changing of scenes and locations will help differentiate each scene from each other. Each level should
                    be different from the previous one to help give a feeling of progression.
                    The aim is to have a comic book art style. Cutscenes will ideally be excerpts from a comic book, saving
                    on animation time, as cutscenes will be screenshots and edited in Adobe illustrator for special effects.


                </p>

            </section>
        </div>
    </div>
</template>

<script>

export default
    {
        name: 'PreProd',
        props: {
        },
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pre_prod_container {
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
        rgb(30, 30, 30);
    background-size: 35px, 100%;
    width: 100%;
    display: grid;
    margin: 0;
    padding: 0;
    gap: 0;
    grid-template-columns: 10% 3% 85%;
}

.MAIN_DIV {
    width: 100%;
    padding-top: 3vw;
    margin: 0;
    margin-right: 5vw;
    grid-column-start: 3;
    grid-column-end: 4;
}

.sidebar_logo {
    transition: 1s;
}

.sidebar_logo:hover {
    transform: scale(1.1);
}

h1 {
    color: aliceblue;
}

.the_side {
    color: #fff;
    width: 100%;
    position: sticky;
    min-width: 120px;
    padding-left: 1vw;
    height: 100%;
    background-image: linear-gradient(30deg, rgb(30, 30, 30), rgb(100, 45, 45));
    border-top-right-radius: 5vw;
    text-align: justify;
    text-transform: uppercase;
    grid-column-start: 1;
    grid-column-end: 2;
}

.the_side .sidebar_item {
    font-size: 12px;
    color: #fff;
    display: block;
    padding: 12px;
    padding-left: 30px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
}

.the_side .sidebar_item:hover {
    color: #3f5efb;
    background: #fff;
    outline: none;
    position: relative;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.the_side .sidebar_item i {
    margin-right: 5px;
}

.the_side .sidebar_item:hover::after {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: 100%;
    right: 0;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 18px;
    box-shadow: 0 20px 0 0 #fff;
}

.the_side .sidebar_item:hover::before {
    content: "";
    position: absolute;
    background-color: transparent;
    top: 38px;
    right: 0;
    height: 35px;
    width: 35px;
    border-top-right-radius: 18px;
    box-shadow: 0 -20px 0 0 #fff;
}

.the_side p {
    margin: 0;
    padding: 40px 0;
}</style>
