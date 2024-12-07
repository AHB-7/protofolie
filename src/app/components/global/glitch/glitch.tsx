import styles from "./glitch.module.css";
export function GlitchedText({
    text,
    fontSize,
}: {
    text: string;
    fontSize: string;
}) {
    return (
        <div className={styles.stack}>
            {[...Array(3)].map((_, index) => (
                <span
                    key={index}
                    style={{ "--index": index } as React.CSSProperties}
                    className={fontSize}
                >
                    {text}
                </span>
            ))}
        </div>
    );
}
