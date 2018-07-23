$(document).ready(function() {
    $('.nav li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });


    $('.card').click(function() {
    	
    	let tmp=false;
    	if ($(this).hasClass('activecard'))
    		tmp = true;

    	$('.card').removeClass('activecard');
       // alert("undone");
		let s = document.getElementById("sectioncontainer");
        s.innerHTML="";
        if (tmp==false){
        $(this).addClass('activecard');


		
		if (this.id == "card1")
		{
		s.innerHTML="<h3>Modern Software</h3><ul class=\"complex\">\
		<li>Rigid systems that can't adapt to business change</li>\
		<li>Siloed data in legacy systems - hard to use and consolidate the data</li>\
		<li>Legacy apps are forcing manual workarounds, degrading operational effectiveness</li>\
		<li>Restricted channels (different customer experiences)</li>\
		</ul>\
		<ul class=\"easy\">\
		<li> TRELLIS is specifically designed to integrate data and automate workflows\
			<ul>\
			<li>Easy for us to build a custom data model and user experience extremely quickly to reverse engineer any legacy appl ication and make significant improvements at the same time</li>\
			<li>Why?\
				<ul>\
				<li>Already have the TRELLIS framework and pre-built business application functionality and components for the most common business systems (e.g. CRM, HRIS, pricing, field services, financial tracking and invoicing, etc.)</li>\
				<li>Can quickly integrate data across any of your other applications</li>\
				</ul>\
			</li>\
			</ul>\
		</li>\
		<li> Understand current and future business needs\
			<ul>\
				<li>Value chain analysis</li>\
				<li>Business process optimization</li>\
			</ul>\
		</li>\
		</ul>";
		}
		else if(this.id=="card2")
		{
		s.innerHTML="<h3>Relentless Innovation</h3><ul class=\"complex\">\
		<li>Emerging technology is disrupting long established business models</li>\
		<li>Rate of change is accelerating</li>\
		<li>New ways of thinking require agile architectural frameworks</li>\
		<li>Rapid t ime to market requires advanced DevOps capabilities</li>\
		</ul>\
		\
		<ul class=\"easy\">\
		<li>We are relentlessly evolving Trellis to be the best of breed benchmark</li>\
		<li>You benefit from decades of innovation with a proven implementation and evaluation</li>\
		</ul>";
		}
		else if(this.id=="card3")
		{
			s.innerHTML="<h3>Accelerating rate of change</h3>\
			<ul class=\"complex\">\
			<li>Puts established businesses with large IT investments at a disadvantage</li>\
			<li>Hybrid cloud technologies reduce barriers to entry for new business</li>\
			<li>Introduces new models and e 1m1na rnpetitive advantage</li>\
			</ul>\
			\
			<ul class=\"easy\">\
			<li>Trellis makes building systems easy using extremely adaptable components</li>\
			<li>Trellis provides an agile architectural framework and advanced DevOps capabilities to reduce time to market, cost and risk</li>\
			<li>TRELLIS is open ended to integrate with other vendor solutions/components</li>\
			<li>TRELLIS already has (and growing) an extensive component library to start building solutions</li>\
			</ul>";
		}

		else if(this.id=="card4")
		{
			s.innerHTML="<h3>Hybrid Cloud Deployments and Services</h3>\
			<ul class=\"complex\">\
			<li>Attempting a \"lift and shift\" all servers / VMs \"as is\" to cloud will achieve very little business benefit and pose significant business risk. However, a transformation to cloud can be difficult to execute. Hard to achieve the desired benefits of a transformation including: Faster to deploy, Easier to manage, Reliable and scalable, Secure and private</li>\
			<li>Lack the in-house resources to execute a transformation. Most in-house IT teams are focused on existing operations</li>\
			<li>Difficult and confusing to implement low operational cost solutions replacing large legacy capital cost infrastructure. an..d monolithic applications</li>\
			</ul>\
\
			<ul class=\"easy\">\
			<li>Our team is completely focused on helping organizations achieve an IT transformation </li>\
			<li>TRELLIS provides us with the tools and a repeatable model to achieve a successful transformation quickly.</li>\
			<li>Trellis provides an agile architectural framework that leverages hybrid technologies and can adapt easily to new innovations\
				<ul>\
				<li>Holistic architecture that spans infrastructure, applications and business</li> \
				<li>Open ended to use \"best in class\" components</li>\
				<li>Provides guidance for govemance</li>\
				</ul>\
			</li>\
			</ul>";
		}
		else if(this.id=="card5")
		{
		s.innerHTML="<h3>Migrating to PaaS and Saas</h3>\
		<ul class=\"complex\">\
		<li> A new world: laaS, PaaS and Saas are rapidly changing the face of business</li>\
		<li>Hard to keep up with the fast-emerging technologies that imposes a high risk to the business to try to use and integrate with your enterprise</li>\
		<li>Components that used to be hand built are now available off the shelf</li>\
		<li>Applications that used to provide competitive advantage are now commod1t1es</li>\
		<li>Differentiat1on now comes down to how quickly and efficiently you can compose available technologies</li>\
		</ul>\
\
		<ul class=\"easy\">\
		<li>Trellis accelerates the ability for you to transform to the new world</li>\
		<li>Trellis levels the playing field enabling you to deploy new technologies within a mature architectural framework</li>\
		<li>The primary focus of our work around transformation has been around building tools and frameworks that solves the challenges with achieving an IT transformation</li>\
		</ul>";			
		}
		else if(this.id=="card6")
		{
		s.innerHTML="<h3>Omni-channel User Experience</h3>\
		<ul class=\"complex\">\
		<li>Omni-channel single customer view is now an expectation</li>\
		<li>Real-time data synchronization between applications is now table stakes</li>\
		<li>Mobile applications and new form factors need us to re-visualize user experience and workflow</li>\
			<li>Shift processing to the edge where to customer is more directly engaged in the process:\
				<ul>\
				<li>Reducing costs and errors</li>\
				<li>Improving customer experience</li>\
				<li>Generating sales opportunities</li>\
				</ul>\
			</li>\
		</ul>\
		<ul class=\"easy\">\
		<li>Trellis helps you achieve a \"single pane of glass\" view for your customer experience</li>\
		<li>Trellis architectural framework centralizes data and workflow</li>\
		<li>Trellis provides a consistent omr'H-cnannel experience to web, mobile, loT, etc. which allows a customer to transition between endpoints without fragmentation of the user experience</li>\
		</ul>";			
		}
		else if(this.id=="card7")
		{

		s.innerHTML="<h3>Federated Workflow</h3>\
		<ul class=\"complex\">\
		<li>Applications and data are often siloed even within an organization</li>\
		<li>Communications between organizations is using antiquated methods to exchange data</li>\
		<li>Manual processes, data rekey\
		<ul>\
		<li>Data quality issues</li>\
		<li>Security vulnerabilities</li>\
		<li>Unreliable</li>\
		</ul></li>\
		</ul>\
		<ul class=\"easy\">\
		<li>Trellis enables you to implement secure real-time communication both internally and between partners that drives supply chain efficiency:\
		<ul>\
		<li>Optimize automated workflow</li>\
		<li>Reduce reliance on manual interactions that introduce cost, risk and delays</li>\
		<li>Improve visibility and decision making</li>\
		<li>Better coordination and planning</li>\
		</ul></li></ul>";

		}
		}
      //  alert("done");
    });
	$('.carousel').carousel({
  	interval: 6000
	})



});