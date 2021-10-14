<?php
return [
    '@class' => 'Gantry\\Component\\File\\CompiledYamlFile',
    'filename' => '/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/media/gantry5/engines/nucleus/particles/lightcase.yaml',
    'modified' => 1634063115,
    'data' => [
        'name' => 'Lightcase',
        'description' => 'Flexible and responsive Lightbox Plugin.',
        'type' => 'atom',
        'icon' => 'fa-image',
        'form' => [
            'fields' => [
                'enabled' => [
                    'type' => 'input.checkbox',
                    'label' => 'Enabled',
                    'description' => 'Globally enable Lightcase atom.',
                    'default' => true
                ],
                '_instructions' => [
                    'type' => 'separator.note',
                    'class' => 'alert alert-info',
                    'content' => 'Basic usage: <pre>&lt;a href="path/to/media.jpg"<br />   data-rel="lightcase"<br />   title="Your title"<br />><br />    Your link description or thumb<br />&lt;/a></pre>'
                ],
                '_info' => [
                    'type' => 'separator.note',
                    'class' => 'alert alert-info',
                    'content' => 'For more information on how to use this atom, see <a href="http://cornel.bopp-art.com/lightcase/documentation/">Lightcase documentation <i class="fa fa-external-link fa-external-link-alt" aria-hidden="true"></i></a>.'
                ]
            ]
        ]
    ]
];