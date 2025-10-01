---
author: "Organizers"
title: "About the Community"
date: "2025-01-01T08:52:59+08:00"
description: "General information about our events"
tag: "Community"
---

## General Information

Our community brings together students and researchers interested in NLP.  
We foster discussions on exciting topics and organize activities to exchange ideas and learn from each other.  
Most events will be held in person. 🎤  

{{< rawhtml >}}

<h3 style="text-align: left; font-family: Arial, sans-serif;">Organizers</h3>

<style>
.organizer-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 2em;
  font-family: "Arial", sans-serif;
}

.organizer-card {
  background: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 220px;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.organizer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.organizer-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px auto;
  border: 3px solid #2c2f7b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.organizer-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.organizer-name {
  font-weight: bold;
  font-size: 1.1em;
  color: #2c2f7b;
  margin-top: 10px;
}

.organizer-affiliation {
  font-size: 0.9em;
  margin: 6px 0;
  line-height: 1.4em;
  color: #333;
}

.organizer-email {
  font-size: 0.85em;
  color: #7b2cbf;
  text-decoration: none;
}

.organizer-email:hover {
  text-decoration: underline;
}
</style>

<div class="organizer-container">

  <!-- Organizer 1 -->
  <div class="organizer-card">
    <div class="organizer-photo">
      <img src="/irina.webp" alt="Irina Proskurina">
    </div>
    <p class="organizer-name">Irina Proskurina</p>
    <p class="organizer-affiliation">
      ERIC Laboratory<br>Hubert Curie Laboratory<br>University of Lyon<br>University of Lyon 2<br>Jean Monnet University
    </p>
    <a class="organizer-email" href="mailto:irina.proskurina@univ-lyon2.fr">
      irina.proskurina@univ-lyon2.fr
    </a>
  </div>

  <!-- Organizer 2 -->
  <div class="organizer-card">
    <div class="organizer-photo">
      <img src="/erwan.jpg" alt="Erwan Versmée">
    </div>
    <p class="organizer-name">Erwan Versmée</p>
    <p class="organizer-affiliation">
      ERIC Laboratory<br>University of Lyon<br>University of Lyon 2<br>Infologic
    </p>
    <a class="organizer-email" href="mailto:eve@infologic.fr">
      eve@infologic.fr
    </a>
  </div>

</div>

<h3>Participants</h3>

<p>TB updated soon for the 2025–2026 academic year.</p>

<h2>About the Meetups</h2>

<p>Each meetup consists of:</p>
<ul>
  <li>A round-table introduction of participants</li>
  <li>A short presentation by one member on a recently published paper</li>
  <li>Paper discussions in a Birds-of-a-Feather (BoF) format</li>
</ul>

<section> 
 <h3>What are BoFs?</h3>
<p style="font-size: 1.1em;">
Birds-of-a-Feather (BoF) sessions are informal group discussions focused on a shared topic in ML/NLP.
Instead of formal talks, participants sit together, exchange experiences, raise questions, and explore ideas in an open conversation.
Examples of BoF sessions from conferences:
</p>
<ul>
    <li><a href="https://2023.emnlp.org/program/bof" target="_blank">EMNLP 2023 BoF Sessions</a></li>
    <li><a href="https://coling2025.org/program/bof" target="_blank">COLING 2025 BoF Sessions</a></li>
    <li><a href="https://2023.aclweb.org/calls/bof" target="_blank">ACL 2023 BoF Calls</a></li>
</ul>

<h3>How to propose a topic?</h3>
<p style="font-size: 1.1em;">
    Want to suggest a topic? Fill out the form on the homepage and join the discussion on Discord 🚀
</p>

<h3>How are BoFs organized?</h3>
<p style="font-size: 1em;">
    To foster discussion, we provide topics with guiding questions.  
    Each group member shares their answers, and a representative summarizes the main takeaways for everyone.  
</p>

<p style="font-size: 1.1em;">
    Example topics from our first session:  
</p>
<ul>
    <li>Language generation in research and applications</li>
    <li>Recent papers or articles on language generation</li>
    <li>Limitations of language generation</li>
</ul>

<h3>Community Members</h3>
<p style="font-size: 1.1em;">
    So far, we have more than 30 members 🎉  
    Most participants are PhD students working on NLP-related topics.  
    Below are some insights from our initial survey.   
</p>

<p><strong>Highlights from the responses:</strong></p>

<script src="https://cdn.plot.ly/plotly-2.20.0.min.js"></script>

<!-- Chart 1 -->
<div id="level-of-study-chart" style="width: 100%; max-width: 100%; height: auto; min-height: 500px; margin: auto;"></div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'pie',
      labels: ['PhD student', 'Master’s student', 'Postdoctoral researcher', 'Researcher'],
      values: [20, 4, 7, 2],
      textinfo: 'label+percent',
      textposition: 'outside',
      hole: 0.4,
      marker: { colors: ['#636EFA', '#EF553B', '#00CC96', '#AB63FA'] }
    }];
    const layout = {
      title: { text: 'Q1: Level of Study', font: { size: 18 } },
      margin: { t: 50, b: 50, l: 50, r: 50 },
      showlegend: false
    };
    Plotly.newPlot('level-of-study-chart', data, layout, { responsive: true });
  });
</script>

<!-- Chart 2 -->
<div id="activities-chart" style="width: 100%; max-width: 800px; height: 500px; margin: auto;"></div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'bar',
      x: ['Birds of a Feather','Scientific Presentations','Reading Club','Coding Sessions'],
      y: [29, 10, 12, 25],
      marker: {
        color: 'rgba(55, 128, 191, 0.7)',
        line: { color: 'rgba(55, 128, 191, 1)', width: 1.5 }
      },
      text: [29, 10, 12, 25],
      textposition: 'auto'
    }];
    const layout = {
      title: { text: 'Q2: Activity Participation Preferences', font: { size: 18 } },
      xaxis: { title: 'Activities' },
      yaxis: { title: 'Number of Responses' },
      margin: { t: 50, b: 150, l: 50, r: 50 },
    };
    Plotly.newPlot('activities-chart', data, layout, { responsive: true });
  });
</script>

<!-- Chart 3 -->
<div id="nlp-domains-chart" style="width: 100%; max-width: 900px; height: 500px; margin: auto;"></div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const data = [{
      type: 'bar',
      x: [
        'Chatbots','Information Retrieval','Speech Processing (Audio-text)',
        'Applied Linguistics','Industrial Applications','Large Language Models (LLMs)',
        'Fairness and Ethics','Interpretability','Frugality of LLMs',
        'Computational Linguistics','Philosophy/Ethics'
      ],
      y: [6, 19, 7, 8, 9, 17, 9, 14, 8, 2, 1],
      marker: {
        color: 'rgba(99, 110, 250, 0.7)',
        line: { color: 'rgba(99, 110, 250, 1)', width: 1.5 }
      },
      text: [6, 19, 7, 8, 9, 17, 9, 14, 8, 2, 1],
      textposition: 'auto'
    }];
    const layout = {
      title: { text: 'Q3: Domains of Interest in NLP', font: { size: 18 } },
      xaxis: { tickangle: -45 },
      yaxis: { title: 'Number of Responses' },
      margin: { t: 50, b: 150, l: 50, r: 50 },
    };
    Plotly.newPlot('nlp-domains-chart', data, layout, { responsive: true });
  });
</script>

</section>

{{< /rawhtml >}}
