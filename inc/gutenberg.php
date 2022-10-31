<?php

/**
 * File For Custom Gutenberg
 */

function gutenberg_default_colors()
{

    add_theme_support('editor-color-palette', [
        [
            'name'  => esc_attr__('White', 'twentynineteen'),
            'slug'  => 'custom-white',
            'color' => 'white',
        ],
        [
            'name'  => esc_attr__('Red', 'twentynineteen'),
            'slug'  => 'custom-red',
            'color' => 'red',
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
        ],
        [
            'name' => 'Extra Large',
            'slug' => 'xl',
            'size' => 32,
        ],
    ]);
}

add_action('after_setup_theme', 'gutenberg_default_colors');

function register_gutenberg()
{
    wp_register_script('custom-cta-block', get_template_directory_uri() . '/build/index.js', ['wp-blocks', 'wp-editor', 'wp-components']);
    wp_register_style('custom-cta-css', get_template_directory_uri() . '/mystyle.css', []);
    register_block_type('uzair/custom-cta', [
        'editor_script' => 'custom-cta-block',
        'editor_style' => '',
        'style' => 'custom-cta-css'
    ]);
}
add_action('init', 'register_gutenberg');