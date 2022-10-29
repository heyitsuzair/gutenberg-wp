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

function register_gutenberg()
{
    wp_register_script('custom-cta-block', get_template_directory_uri() . '/build/index.js', ['wp-blocks']);
    register_block_type('uzair/custom-cta', [
        'editor_script' => 'custom-cta-block'
    ]);
}
add_action('init', 'register_gutenberg');