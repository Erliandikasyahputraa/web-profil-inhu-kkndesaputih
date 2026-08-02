# Content Compression Strategy

The current implementation treats content like a textbook: if a paragraph exists in the CMS, it is dumped onto the screen in a massive text block. This creates immense reading fatigue and destroys the emotional pacing. 

We will rewrite the *hierarchy* of the information, not the information itself.

## The 4-Step Compression Protocol

### 1. The Pull Quote Elevation
Before rendering a 4-paragraph story about the village history, extract the single most emotional sentence. Make that sentence massive (e.g., a pull quote taking up 40% of the screen width). The remaining paragraphs should be shrunk to a small, readable column (max 65 characters wide) alongside it. 
*Result*: The user gets the emotional hit instantly. They only read the details if they want to.

### 2. The Statistical Translation
Many paragraphs contain data disguised as narrative. 
*Example*: "Desa Air Putih has a population of over 1,200 people and is active 24 hours a day with 100% community participation."
*Action*: Delete the paragraph. Replace it with massive numbers: 
**1.2K** Residents
**24/7** Activity
**100%** Participation
*Result*: Instant comprehension, zero reading fatigue, visually striking.

### 3. The Caption Demotion
Do not use body paragraphs to describe what is happening in a photo. 
*Action*: Move descriptive text into tiny (12px), elegant captions directly beneath or beside the image. 
*Result*: Frees up the main narrative flow for storytelling, not exposition.

### 4. The "Read More" Discipline
If a section of text exceeds 3 short paragraphs, it is too long for an editorial scroll experience. 
*Action*: Implement elegant, unobtrusive "Read Full Story" interactions, or accept that the user will not read it and design it as a beautiful, dense texture (Swiss style) rather than expecting them to read every word.
