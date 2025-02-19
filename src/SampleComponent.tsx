interface SampleComponentProps {
    foo: string;
}

export const SampleComponent = ({ foo }: SampleComponentProps) => {
    return <h1>Hello world {foo}</h1>;
}