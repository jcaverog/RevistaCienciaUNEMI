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

/* @gantry-admin/error.html.twig */
class __TwigTemplate_64520ddefd4da92008c1da7e51cdd2d3b6d53e2d3b762767045c5257178e3dfe extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'gantry' => [$this, 'block_gantry'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return $this->loadTemplate((((($context["ajax"] ?? null) - ($context["suffix"] ?? null))) ? ("@gantry-admin/partials/ajax.html.twig") : ("@gantry-admin/partials/base.html.twig")), "@gantry-admin/error.html.twig", 1);
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->getParent($context)->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_gantry($context, array $blocks = [])
    {
        // line 4
        echo "    <h1>";
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo "</h1>

    <p>";
        // line 6
        echo twig_escape_filter($this->env, $this->env->getExtension('Gantry\Component\Twig\TwigExtension')->transFilter("GANTRY5_PLATFORM_OOPS"), "html", null, true);
        echo ", ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["error"] ?? null), "getMessage", []), "html", null, true);
        echo ".</p>
";
    }

    public function getTemplateName()
    {
        return "@gantry-admin/error.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 6,  41 => 4,  38 => 3,  29 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "@gantry-admin/error.html.twig", "/home/u930320026/domains/aviacionguayaquil.com/public_html/revistaunemi/administrator/components/com_gantry5/templates/error.html.twig");
    }
}
