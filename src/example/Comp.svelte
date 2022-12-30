<script>
    export let name
    export let values

    let buttonText = 'Button'

    function handleClick() {
        buttonText = 'Button Clicked'
    }
</script>

<h1>Hello {name}!</h1>

<button on:click="{handleClick}">{buttonText}</button>

<input type="checkbox" bind:group={values} value="bar" data-testid="bar"/>
