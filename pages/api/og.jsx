import { ImageResponse } from 'next/og';

export const config = {
    runtime: 'edge',
};

export default function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: 28,
                        fontWeight: 600,
                        color: '#0284c7',
                        textTransform: 'uppercase',
                        letterSpacing: 4,
                        marginBottom: 24,
                    }}
                >
                    Full-Stack Developer
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 96,
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.1,
                    }}
                >
                    Jeremy Kenneth
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 32,
                        color: '#475569',
                        marginTop: 24,
                        maxWidth: 900,
                    }}
                >
                    Building web &amp; mobile applications for governments, enterprises, and startups across Indonesia
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
