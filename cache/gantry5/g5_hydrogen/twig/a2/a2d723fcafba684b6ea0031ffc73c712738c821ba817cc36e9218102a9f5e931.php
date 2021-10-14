<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @nucleus/page_head.html.twig */
class __TwigTemplate_3712bd9f15ff6eb4379d59f7736735356eb32334b917e921157402ec852ea646 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'head_stylesheets' => [$this, 'block_head_stylesheets'],
            'head_scripts' => [$this, 'block_head_scripts'],
            'head_platform' => [$this, 'block_head_platform'],
            'head_overrides' => [$this, 'block_head_overrides'],
            'head_meta' => [$this, 'block_head_meta'],
            'head_title' => [$this, 'block_head_title'],
            'head_application' => [$this, 'block_head_application'],
            'head_ie_stylesheets' => [$this, 'block_head_ie_stylesheets'],
            'head' => [$this, 'block_head'],
            'head_custom' => [$this, 'block_head_custom'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "debugger", []), "assets", [], "method");
        // line 2
        $this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", []), "loadAtoms", [], "method");
        // line 4
        $context["faEnabled"] = (($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "enable", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "enable", []), 1)) : (1));
        // line 5
        $context["faVersion"] = (($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "version", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "version", []), "fa4")) : ("fa4"));
        // line 6
        $assetFunction = $this->env->getFunction('parse_assets')->getCallable();
        $assetVariables = ["priority" => 10];
        if ($assetVariables && !is_array($assetVariables)) {
            throw new UnexpectedValueException('{% scripts with x %}: x is not an array');
        }
        $location = "head";
        if ($location && !is_string($location)) {
            throw new UnexpectedValueException('{% scripts in x %}: x is not a string');
        }
        $priority = isset($assetVariables['priority']) ? $assetVariables['priority'] : 0;
        ob_start();
        // line 7
        echo "    ";
        $this->displayBlock('head_stylesheets', $context, $blocks);
        // line 28
        $this->displayBlock('head_scripts', $context, $blocks);
        // line 41
        $this->displayBlock('head_platform', $context, $blocks);
        // line 42
        echo "
    ";
        // line 43
        $this->displayBlock('head_overrides', $context, $blocks);
        $content = ob_get_clean();
        $assetFunction($content, $location, $priority);
        // line 50
        echo "<head>
    ";
        // line 51
        echo twig_join_filter($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "document", []), "getHtml", [0 => "head_top"], "method"), "
    ");
        echo "
    ";
        // line 52
        $this->displayBlock('head_meta', $context, $blocks);
        // line 78
        $this->displayBlock('head_title', $context, $blocks);
        // line 82
        echo "
    ";
        // line 83
        $this->displayBlock('head_application', $context, $blocks);
        // line 87
        echo "
    ";
        // line 88
        $this->displayBlock('head_ie_stylesheets', $context, $blocks);
        // line 91
        $this->displayBlock('head', $context, $blocks);
        // line 92
        $this->displayBlock('head_custom', $context, $blocks);
        // line 97
        echo twig_join_filter($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "document", []), "getHtml", [0 => "head_bottom"], "method"), "
    ");
        echo "
</head>
";
    }

    // line 7
    public function block_head_stylesheets($context, array $blocks = [])
    {
        // line 8
        if (($context["faEnabled"] ?? null)) {
            // line 9
            echo "            ";
            if ((($context["faVersion"] ?? null) == "fa4")) {
                // line 10
                echo "                <link rel=\"stylesheet\" href=\"gantry-assets://css/font-awesome.min.css\" type=\"text/css\"/>
            ";
            } elseif ((            // line 11
($context["faVersion"] ?? null) == "fa5css")) {
                // line 12
                echo "                <link rel=\"stylesheet\" href=\"gantry-assets://css/font-awesome5-all.min.css\" type=\"text/css\">
                ";
                // line 13
                if ((($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "fa4_compatibility", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "fa4_compatibility", []), 1)) : (1))) {
                    // line 14
                    echo "                    <link rel=\"stylesheet\" href=\"gantry-assets://css/font-awesome5-shim.min.css\" type=\"text/css\">
                ";
                }
                // line 16
                echo "            ";
            } elseif ((((($context["faVersion"] ?? null) == "fa5js") || ((($context["faVersion"] ?? null) == "manual") && $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "fontawesome", []), "html_js_import", []))) && (($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "content_compatibility", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "content_compatibility", []), 1)) : (1)))) {
                // line 17
                echo "                <link rel=\"stylesheet\" href=\"gantry-assets://css/font-awesome5-pseudo.min.css\" type=\"text/css\">
            ";
            } elseif ((            // line 18
($context["faVersion"] ?? null) == "manual")) {
                // line 19
                echo "                ";
                echo $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->htmlFilter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "fontawesome", []), "html_css_import", []));
            }
            // line 21
            echo "        ";
        }
        // line 22
        echo "        <link rel=\"stylesheet\" href=\"gantry-engine://css-compiled/nucleus.css\" type=\"text/css\"/>
        ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", [], "any", false, true), "configuration", [], "any", false, true), "css", [], "any", false, true), "persistent", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", [], "any", false, true), "configuration", [], "any", false, true), "css", [], "any", false, true), "persistent", []), $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", []), "configuration", []), "css", []), "files", []))) : ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", []), "configuration", []), "css", []), "files", []))));
        foreach ($context['_seq'] as $context["_key"] => $context["scss"]) {
            // line 24
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $context["scss"], "html", null, true);
            echo ".scss\" type=\"text/css\"/>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['scss'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "    ";
    }

    // line 28
    public function block_head_scripts($context, array $blocks = [])
    {
        // line 29
        if (($context["faEnabled"] ?? null)) {
            // line 30
            echo "            ";
            if ((($context["faVersion"] ?? null) == "fa5js")) {
                // line 31
                echo "                <script type=\"text/javascript\" src=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("gantry-assets://js/font-awesome5-all.min.js"), "html", null, true);
                echo "\"></script>
                ";
                // line 32
                if ((($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "fa4_compatibility", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", [], "any", false, true), "page", [], "any", false, true), "fontawesome", [], "any", false, true), "fa4_compatibility", []), 1)) : (1))) {
                    // line 33
                    echo "                    <script type=\"text/javascript\" src=\"";
                    echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("gantry-assets://js/font-awesome5-shim.min.js"), "html", null, true);
                    echo "\"></script>
                ";
                }
                // line 35
                echo "            ";
            } elseif ((($context["faVersion"] ?? null) == "manual")) {
                // line 36
                echo "                ";
                echo $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->htmlFilter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "fontawesome", []), "html_js_import", []));
            }
            // line 38
            echo "        ";
        }
        // line 39
        echo "    ";
    }

    // line 41
    public function block_head_platform($context, array $blocks = [])
    {
    }

    // line 43
    public function block_head_overrides($context, array $blocks = [])
    {
        // line 44
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", []), "configuration", []), "css", []), "overrides", []));
        foreach ($context['_seq'] as $context["_key"] => $context["scss"]) {
            // line 45
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $context["scss"], "html", null, true);
            echo ".scss\" type=\"text/css\"/>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['scss'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 47
        echo "    ";
    }

    // line 52
    public function block_head_meta($context, array $blocks = [])
    {
        // line 53
        echo "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
        ";
        // line 55
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "head", []), "meta", [])) {
            // line 56
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "head", []), "meta", []));
            foreach ($context['_seq'] as $context["_key"] => $context["attributes"]) {
                // line 57
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($context["attributes"]);
                foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                    // line 58
                    echo "                    ";
                    if ((is_string($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = $context["key"]) && is_string($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = "og:") && ('' === $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 || 0 === strpos($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4, $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144)))) {
                        // line 59
                        echo "                    <meta property=\"";
                        echo twig_escape_filter($this->env, $context["key"]);
                        echo "\" content=\"";
                        echo twig_escape_filter($this->env, $context["value"]);
                        echo "\" />
                    ";
                    } else {
                        // line 61
                        echo "                    <meta name=\"";
                        echo twig_escape_filter($this->env, $context["key"]);
                        echo "\" content=\"";
                        echo twig_escape_filter($this->env, $context["value"]);
                        echo "\" />
                    ";
                    }
                    // line 63
                    echo "                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attributes'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 66
        echo twig_join_filter($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "document", []), "getHtml", [0 => "head_meta"], "method"), "
    ");
        echo "

        ";
        // line 68
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "assets", []), "favicon", [])) {
            // line 69
            echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "assets", []), "favicon", [])), "html", null, true);
            echo "\" />
        ";
        }
        // line 71
        echo "
        ";
        // line 72
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "assets", []), "touchicon", [])) {
            // line 73
            echo "        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "assets", []), "touchicon", [])), "html", null, true);
            echo "\">
        <link rel=\"icon\" sizes=\"192x192\" href=\"";
            // line 74
            echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "assets", []), "touchicon", [])), "html", null, true);
            echo "\">
        ";
        }
        // line 76
        echo "    ";
    }

    // line 78
    public function block_head_title($context, array $blocks = [])
    {
        // line 79
        echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
        <title>Title</title>";
    }

    // line 83
    public function block_head_application($context, array $blocks = [])
    {
        // line 84
        echo twig_join_filter($this->getAttribute(($context["gantry"] ?? null), "styles", [0 => "head"], "method"), "
");
        echo "
        ";
        // line 85
        echo twig_join_filter($this->getAttribute(($context["gantry"] ?? null), "scripts", [0 => "head"], "method"), "
");
    }

    // line 88
    public function block_head_ie_stylesheets($context, array $blocks = [])
    {
    }

    // line 91
    public function block_head($context, array $blocks = [])
    {
    }

    // line 92
    public function block_head_custom($context, array $blocks = [])
    {
        // line 93
        echo "        ";
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "head", []), "head_bottom", [])) {
            // line 94
            echo "        ";
            echo $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "config", []), "page", []), "head", []), "head_bottom", []);
            echo "
        ";
        }
        // line 96
        echo "    ";
    }

    public function getTemplateName()
    {
        return "@nucleus/page_head.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  346 => 96,  340 => 94,  337 => 93,  334 => 92,  329 => 91,  324 => 88,  319 => 85,  314 => 84,  311 => 83,  306 => 79,  303 => 78,  299 => 76,  294 => 74,  289 => 73,  287 => 72,  284 => 71,  278 => 69,  276 => 68,  270 => 66,  259 => 63,  251 => 61,  243 => 59,  240 => 58,  236 => 57,  232 => 56,  230 => 55,  226 => 53,  223 => 52,  219 => 47,  211 => 45,  207 => 44,  204 => 43,  199 => 41,  195 => 39,  192 => 38,  188 => 36,  185 => 35,  179 => 33,  177 => 32,  172 => 31,  169 => 30,  167 => 29,  164 => 28,  160 => 26,  152 => 24,  148 => 23,  145 => 22,  142 => 21,  138 => 19,  136 => 18,  133 => 17,  130 => 16,  126 => 14,  124 => 13,  121 => 12,  119 => 11,  116 => 10,  113 => 9,  111 => 8,  108 => 7,  100 => 97,  98 => 92,  96 => 91,  94 => 88,  91 => 87,  89 => 83,  86 => 82,  84 => 78,  82 => 52,  77 => 51,  74 => 50,  70 => 43,  67 => 42,  65 => 41,  63 => 28,  60 => 7,  48 => 6,  46 => 5,  44 => 4,  42 => 2,  40 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "@nucleus/page_head.html.twig", "/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/media/gantry5/engines/nucleus/templates/page_head.html.twig");
    }
}
