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

/* partials/page_head.html.twig */
class __TwigTemplate_87b82179f7cc990f54fc327402f2557a5aaae231da4bf0c335907696aa14276c extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'head_title' => [$this, 'block_head_title'],
            'head_application' => [$this, 'block_head_application'],
            'head_platform' => [$this, 'block_head_platform'],
            'head' => [$this, 'block_head'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@nucleus/page_head.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("@nucleus/page_head.html.twig", "partials/page_head.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_head_title($context, array $blocks = [])
    {
    }

    // line 6
    public function block_head_application($context, array $blocks = [])
    {
        // line 7
        echo "<jdoc:include type=\"head\" />";
    }

    // line 10
    public function block_head_platform($context, array $blocks = [])
    {
        // line 11
        $this->displayParentBlock("head_platform", $context, $blocks);
        echo "
    ";
        // line 12
        if ($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "theme", []), "joomla", [])) {
            // line 13
            echo "        ";
            if ($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "platform", []), "checkVersion", [0 => 4], "method")) {
                echo " ";
                // line 14
                echo "            ";
                if (($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "page", []), "direction", []) != "rtl")) {
                    // line 15
                    echo "            <link rel=\"stylesheet\" href=\"";
                    echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("gantry-engine://css-compiled/bootstrap5.css"), "html", null, true);
                    echo "\" type=\"text/css\" />
            <link rel=\"stylesheet\" href=\"";
                    // line 16
                    echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("media/system/css/joomla-fontawesome.min.css"), "html", null, true);
                    echo "\" type=\"text/css\" />
            ";
                }
                // line 18
                echo "        ";
            } elseif ($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "platform", []), "checkVersion", [0 => 3], "method")) {
                echo " ";
                // line 19
                echo "            <link rel=\"stylesheet\" href=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("gantry-assets://css/bootstrap-gantry.css"), "html", null, true);
                echo "\" type=\"text/css\" />
            <link rel=\"stylesheet\" href=\"";
                // line 20
                echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("gantry-engine://css-compiled/joomla.css"), "html", null, true);
                echo "\" type=\"text/css\" />
            ";
                // line 21
                if (($this->getAttribute($this->getAttribute(($context["gantry"] ?? null), "page", []), "direction", []) == "rtl")) {
                    // line 22
                    echo "            <link rel=\"stylesheet\" href=\"";
                    echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("media/jui/css/bootstrap-rtl.css"), "html", null, true);
                    echo "\" type=\"text/css\" />
            ";
                }
                // line 24
                echo "            <link rel=\"stylesheet\" href=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("media/jui/css/icomoon.css"), "html", null, true);
                echo "\" type=\"text/css\" />
        ";
            }
            // line 26
            echo "    ";
        }
        // line 27
        echo "
    ";
        // line 28
        if ($this->getAttribute(($context["gantry"] ?? null), "debug", [])) {
            // line 29
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->urlFunc("media/cms/css/debug.css"), "html", null, true);
            echo "\" type=\"text/css\" />
    ";
        }
    }

    // line 33
    public function block_head($context, array $blocks = [])
    {
        // line 34
        $this->displayParentBlock("head", $context, $blocks);
    }

    public function getTemplateName()
    {
        return "partials/page_head.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  126 => 34,  123 => 33,  115 => 29,  113 => 28,  110 => 27,  107 => 26,  101 => 24,  95 => 22,  93 => 21,  89 => 20,  84 => 19,  80 => 18,  75 => 16,  70 => 15,  67 => 14,  63 => 13,  61 => 12,  57 => 11,  54 => 10,  50 => 7,  47 => 6,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "partials/page_head.html.twig", "/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/media/gantry5/engines/nucleus/twig/partials/page_head.html.twig");
    }
}
