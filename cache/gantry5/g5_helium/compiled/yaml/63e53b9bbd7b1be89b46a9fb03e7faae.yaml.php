<?php
return [
    '@class' => 'Gantry\\Component\\File\\CompiledYamlFile',
    'filename' => '/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/media/gantry5/engines/nucleus/blueprints/page/fontawesome.yaml',
    'modified' => 1634063115,
    'data' => [
        'name' => 'Font Awesome Settings',
        'description' => 'Configuration for Font Awesome icon set and toolkit.',
        'type' => 'global',
        'form' => [
            'fields' => [
                'enable' => [
                    'type' => 'enable.enable',
                    'label' => 'Enable',
                    'description' => 'Enable or disable the loading of the Font Awesome icon library on the frontend. This is useful if you want to manually add a different version of the library (e.g. paid version).',
                    'default' => 1
                ],
                'version' => [
                    'type' => 'select.select',
                    'label' => 'Version',
                    'description' => 'Specify which version of the Font Awesome icon library should be loaded on the frontend. You can also completely disable Font Awesome or specify the import tags yourself in the textfield below.',
                    'default' => 'fa4',
                    'options' => [
                        'fa4' => 'Font Awesome 4 (legacy)',
                        'fa5css' => 'Font Awesome 5 Free (Webfont / CSS)',
                        'fa5js' => 'Font Awesome 5 Free (SVG / JS)',
                        'manual' => 'Load Manually'
                    ]
                ],
                'fa4_compatibility' => [
                    'type' => 'enable.enable',
                    'label' => 'V4 Compatibility',
                    'description' => 'Enable or disable the backwards compatibility for version 4.x of the Font Awesome library when using version 5.x.',
                    'default' => 1
                ],
                'content_compatibility' => [
                    'type' => 'enable.enable',
                    'label' => 'Content Compatibility',
                    'description' => 'Enable or disable the content (pseudo-element) compatibility when using the SVG / JS version of Font Awesome 5.x. This also applies when loading the library manually.',
                    'default' => 1
                ],
                'html_css_import' => [
                    'type' => 'textarea.textarea',
                    'label' => 'HTML CSS Import (Manual)',
                    'description' => 'Enter your HTML to manually load the CSS files of the Font Awesome library. This is only necessary if you selected the option to manually load the library from the dropdown field above.'
                ],
                'html_js_import' => [
                    'type' => 'textarea.textarea',
                    'label' => 'HTML JS Import (Manual)',
                    'description' => 'Enter your HTML to manually load the JS files of the Font Awesome library. This is only necessary if you selected the option to manually load the library from the dropdown field above.'
                ]
            ]
        ]
    ]
];
