import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    message: string = 'Hello my dear friend! :)';

    groceryList = [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ];

    onClick (): void {
        window.alert(this.groceryList[0].text)
    }
}