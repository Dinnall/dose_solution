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

                        <div>
                        <input  v-model="suggestion" type="text">
                        <button v-on:click="redirect" id="suggestion">Give us a suggestion Tag </button>
                        </input>

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
            suggestion: '',
            msg: 'Let DOSE guide you'
        }
    },
    methods:{
     redirect: function(){
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "http://mockbin.org/bin/7d91b1e8-932a-4567-9049-350824bdc6ee?foo=bar&foo=baz",
          "method": "POST",
          "headers": {
          "content-type": "application/x-www-form-urlencoded"
          },
          "data": {
            "results":this.suggestion
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);
        });
     }



    }
}
</script>