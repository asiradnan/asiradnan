'use client'
import React from 'react';

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
            <div
                className="animated-dot-grid absolute -inset-[60px]"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--dot-color) 1.25px, transparent 1.25px)',
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
}
