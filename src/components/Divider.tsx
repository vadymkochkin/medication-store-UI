interface Props {
    className?: string;
}
const Divider = ({ className }: Props) => {
    return (
        <div className={`divider ${className ?? 'my-8'}`}>
        </div>
    );
}

export default Divider;