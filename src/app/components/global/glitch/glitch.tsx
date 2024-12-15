import styles from "./glitch.module.css";

export function GlitchedText({
    text,
    class: classes,
}: {
    text: string;
    class: string | string[];
}) {
    const combinedClasses = Array.isArray(classes)
        ? classes.join(" ")
        : classes;

    return (
        <div className={styles.stack}>
            {[...Array(3)].map((_, index) => (
                <p
                    key={index}
                    style={{ "--index": index } as React.CSSProperties}
                    className={combinedClasses} 
                >
                    {text}
                </p>
            ))}
        </div>
    );
}
