<?php
return [
    '@class' => 'Gantry\\Component\\File\\CompiledYamlFile',
    'filename' => '/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/media/gantry5/engines/nucleus/particles/custom.yaml',
    'modified' => 1634063115,
    'data' => [
        'name' => 'Custom HTML',
        'description' => 'Display custom HTML block.',
        'type' => 'particle',
        'icon' => 'fa-code',
        'configuration' => [
            'caching' => [
                'type' => 'config_matches',
                'values' => [
                    'twig' => '0',
                    'filter' => '0'
                ]
            ]
        ],
        'form' => [
            'fields' => [
                'enabled' => [
                    'type' => 'input.checkbox',
                    'label' => 'Enabled',
                    'description' => 'Globally enable the particle.',
                    'default' => true
                ],
                'html' => [
                    'type' => 'textarea.textarea',
                    'label' => 'Custom HTML',
                    'description' => 'Enter custom HTML into here.',
                    'overridable' => false
                ],
                'twig' => [
                    'type' => 'input.checkbox',
                    'label' => 'Process Twig',
                    'description' => 'Enable Twig template processing in the content. Twig will be processed before shortcodes.',
                    'default' => '0'
                ],
                'filter' => [
                    'type' => 'input.checkbox',
                    'label' => 'Process shortcodes',
                    'description' => 'Enable shortcode processing / filtering in the content.',
                    'default' => '0'
                ]
            ]
        ]
    ]
];
