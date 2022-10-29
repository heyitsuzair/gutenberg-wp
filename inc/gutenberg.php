<?php

/**
 * File For Custom Gutenberg
 */

function gutenberg_default_colors()
{

    add_theme_support('editor-color-palette', [
        [
            'name' => 'White',
            'slug' => 'white',
            'color' => '#ffffff'
        ],
        [
            'name' => 'Red',
            'slug' => 'red',
            'color' => 'red'
        ],
    ]);

    add_theme_support('editor-font-sizes', [
        [
            'name' => 'Normal',
            'slug' => 'normal',
            'size' => 16,
        ],
        [
            'name' => 'Large',
            'slug' => 'large',
            'size' => 24,
        ]
    ]);
}

add_action('init', 'gutenberg_default_colors');