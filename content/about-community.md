---
author: "Organizers"
title: "About the Community"
date: "2025-01-01T08:52:59+08:00"
description: "General info about our events"
tag: "lala"
---

## General Information

Our community connects students with shared interests in NLP and fosters discussions on exciting topics.  
Most events will be held in person. 🎤👥  

{{< rawhtml >}}
<section> 
 <h3>What are BoFs?</h3>
<p style="font-size: 1.3em;">
    BoFs (Birds-of-a-Feather sessions) are informal gatherings where people discuss shared interests in ML/NLP.  
    They provide a relaxed space to exchange ideas, tackle challenges, and explore new research directions.  
    Here are a few examples from past conferences:  
    <ul>
        <li><a href="https://2023.emnlp.org/program/bof" target="_blank">EMNLP 2023 BoF Sessions</a></li>
        <li><a href="https://coling2025.org/program/bof" target="_blank">COLING 2025 BoF Sessions</a></li>
        <li><a href="https://2023.aclweb.org/calls/bof" target="_blank">ACL 2023 BoF Calls</a></li>
    </ul></p>
<h3>How to propose a topic for BoFs?</h3>
  <p style="font-size: 1.3em;">
      Want to suggest a topic? Fill out the form on the homepage and join the discussion on Discord! 🚀</p>
<h3>How will BoFs be organized?</h3>

<p style="font-size: 1.3em;">
    To foster discussion, we will provide topics along with key points for debate.  
    Each group member will answer the listed questions, and a representative will summarize the key takeaways for the larger audience. 📢  
</p>

<p style="font-size: 1.3em;">
    For the first session, for example, we discussed:  
    <ul>
        <li>Language generation in research and applications</li>
        <li>Recent papers or articles on language generation</li>
        <li>Limitations in language generation</li>
    </ul></p>



<h3>Who has already joined the community?</h3>
    <p style="font-size: 1.3em;">
        So far, we have over 30 members! 🎉  
        Most of the participants are PhD students working on NLP-related topics. Below are some insights from our first round of responses.   
    </p>
      <p style="font-size: 1em;"><strong>Key highlights from the responses:</strong></p>
        <script src="https://cdn.plot.ly/plotly-2.20.0.min.js"></script>

<!-- Chart Container -->
<div id="level-of-study-chart" style="width: 100%; max-width: 100%; height: auto; min-height: 500px; margin: auto;"></div>

<!-- Plotly Script -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'pie',
      labels: ['PhD student', 'Master’s student', 'Postdoctoral researcher', 'Researcher'],
      values: [20, 4, 7, 2],
      textinfo: 'label+percent',
      textposition: 'outside',
      hole: 0.4,
      marker: {
        colors: ['#636EFA', '#EF553B', '#00CC96', '#AB63FA']
      }
    }];

    const layout = {
      title: {
        text: 'Q1: Level of Study',
        font: { size: 18 }
      },
      margin: { t: 50, b: 50, l: 50, r: 50 },
      showlegend: false
    };

    Plotly.newPlot('level-of-study-chart', data, layout, {
      responsive: true
    });
  });
</script>

<script src="https://cdn.plot.ly/plotly-2.20.0.min.js"></script>

<div id="activities-chart" style="width: 100%; max-width: 800px; height: 500px; margin: auto;"></div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'bar',
      x: [
        'Birds of a Feather',
        'Scientific Presentations',
        'Reading Club',
        'Coding Sessions',
      ],
      y: [29, 10, 12, 25],
      marker: {
        color: 'rgba(55, 128, 191, 0.7)',
        line: { color: 'rgba(55, 128, 191, 1)', width: 1.5 }
      },
      text: [29, 10, 12, 25],
      textposition: 'auto'
    }];

    const layout = {
      title: {
        text: 'Q2: Activity Participation Preferences',
        font: { size: 18 }
      },
      xaxis: {
        title: 'Activities',
        tickangle: 0
      },
      yaxis: { title: 'Number of Responses' },
      margin: { t: 50, b: 150, l: 50, r: 50 },
    };

    Plotly.newPlot('activities-chart', data, layout, { responsive: true });
  });
</script>

<script src="https://cdn.plot.ly/plotly-2.20.0.min.js"></script>

<div id="nlp-domains-chart" style="width: 100%; max-width: 900px; height: 500px; margin: auto;"></div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'bar',
      x: [
        'Chatbots',
        'Information Retrieval',
        'Speech Processing (Audio-text)',
        'Applied Linguistics',
        'Industrial Applications',
        'Large Language Models (LLMs)',
        'Fairness and Ethics',
        'Interpretability',
        'Frugality of LLMs',
        'Computational Linguistics',
        'Philosophy/Ethics',
      ],
      y: [6, 19, 7, 8, 9, 17, 9, 14, 8, 2],
      marker: {
        color: 'rgba(99, 110, 250, 0.7)',
        line: { color: 'rgba(99, 110, 250, 1)', width: 1.5 }
      },
      text: [6, 19, 6, 8, 9, 17, 9, 14, 8, 1, 1, 1, 1],
      textposition: 'auto'
    }];

    const layout = {
      title: {
        text: 'Q3: Domains of Interest in NLP',
        font: { size: 18 }
      },
      xaxis: {
        tickangle: -45
      },
      yaxis: { title: 'Number of Responses' },
      margin: { t: 50, b: 150, l: 50, r: 50 },
    };

    Plotly.newPlot('nlp-domains-chart', data, layout, { responsive: true });
  });
</script>
    </section>

      </header>
</section>
{{< /rawhtml >}}

---