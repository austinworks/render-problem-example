<script>
    export let name
    export let values
    export let testid=""

    let buttonText = 'Button'

    function handleClick() {
        buttonText = 'Button Clicked'
    }
</script>

<div id={testid}>
    <h1>Hello {name}!</h1>

    <button on:click="{handleClick}">{buttonText}</button>

    <input type="checkbox" bind:group={values} value="bar" data-testid="bar"/>
</div>