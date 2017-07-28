<template>
    <div id="app">
        <div id="wrapper">

            <header id="header">

				<div class="content">

				    <div class="inner">

				        <h1>DOSE Ai</h1>
						<p>Using the voice command "DOSE" followed by a specific tag you will be redirected to the appropiate page</p>
                        <p>Example: "DOSE, show me music". </p>
                        <p>Example: "DOSE, show me entertainment". </p>
                        <p>In those respected example music and entertainment were the tags. </p>



                        <div>
                            <p id="response"></p>
                            <input id="input" type="text">
                            <button id="recording">Click me then speak</i></button>
                        </div>

				    </div>
        
				</div>

            </header>

        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Let DOSE guide you'
        }
    }
}
</script>