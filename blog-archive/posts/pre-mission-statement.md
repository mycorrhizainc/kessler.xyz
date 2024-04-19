---
title: Pre-Company Draft Mission Statement
author: Nicole Venner
date: 03/03/2024
---

This is some thoughts I had on company formation back when we were founding the company in 2023, thought it would be fun to include for posterity.


Pretty much everything contained in here isnt original and you have stated in one form or another in previous convos, 

# Co Gell Man Amnesia and AI

This has been a big problem with a lot of conventional AI programs is that they suffer from co-Gell Man Amnesia, (Defined as loosing all faith in a media publication or piece of technology after seeing it fail to live up to expectations in one specific area). Every single person who has used chatgpt follows the cycle.
0. Use the AI for small basic use cases. Get super excited about how well it preforms on those basic use cases.
1. Dive in and use AI on a topic that you are already an expert on.
2. Get excited about how well it looks like its preforming on this expert use case.
3. Realize some fundamental flaw in the way AI interacts with their specific use case.
4. Assume it is unusable for every use case and abandon it.
5. (Optional) The model progresses enough to overcome the limitations, but keeping up with state of the art is difficult, see hands in any diffusion model released in the last 3 months.
A big disadvantage of this user experience is the AI model always follows the principle of "Overpromise and Underdeliver" since it only completely fails tasks in ways that are hard to examine. This creates an inherently hostile user experience, especially compared to almost any other kind of software where the learning curve means that most of the features arent apparent on first glance. This also makes it almost unusable for applications with high stakes and low error tolerance.

# Introduction to Machine Learning
Chat Gippity: Arr, me hearties! When it comes to the travails of hallucinations in these vast language models, we be sailin' treacherous waters, we do! These models, like meself, be afloat with a bounty o' information from days gone by, but alas, they be sufferin' from their own peculiar afflictions. These hallucinations be a result o' their tremendous size and complexity, causin' 'em to conjure up sentences and notions that be not grounded in truth or reality. They be mixin' words and phrases like a mischievous crew o' scallywags, leadin' to misinformation and confusion. It be a constant battle to ensure these models be weighin' their words with caution, lest they lead us astray on our noble quest for knowledge. So, me hearties, we be settin' our sights on addressin' these hallucinations, bringin' clarity and accuracy to these language models as we navigate these uncharted linguistic seas!
### Terminology
LLM - Large Language Model, works based on predicting text 
Transformer Architecture - A architecture for LLM's that have been the single cause of all of the big advances made over the last 4 years: https://arxiv.org/abs/1706.03762 Philosophically intresting
## Weaknesses
0. LLM's cannot really create new ideas that aren't a direct restatement of training data. (Even if philosophically humans cant come up with completely original ideas, humans are way way way better at coming up with semi original ideas then LLMs)
1. First Pass Effect: The current generation LLM architecture (Namely Transformers) works based on statistical prediction of what word is most likely to come next based on just the words that came before. This means that a LLM has no plan for the structure of the paragraph when it is writing the first word of said paragraph.  (This can be somewhat mitigated by using chain of thought prompting, where you ask it to generate an initial result, then feed it back to itself and ask it to generate a better version of it.)
2. Prompt Dependence: The quality of a specific output varies wildly, you can drastically improve its performance on math questions by asking it to "think through a problem step by step", similar prompts that improve quality include "well researched", "write in an academic tone" among others.
3. Falling Accuracy with Increased Length: Mostly due to the first pass effect LLM's really struggle to write anything longer then 500 words. This can be partially mitigated via human intervention and potentially  some prompting techniques. Any real solution is going to require a change in architecture.
4. Falling Accuracy with Obscurity of Topic: LLM pretty much any topic without a deluge of examples on the internet is going to be inaccurate, with the inaccuracies getting worse the more obscure the topic. This has a solution of providing the model with additional data about the topic you are interested in. (There are some current approaches to do this, all with a bunch of different limitations. For examples of this done well, see the community Stable Diffusion Models) I see getting the data as the biggest problem that this project is going to solve.
5. Quadratic Memory Scaling: Conventional LLM's based on the transformer architecture have this issue where doubling the amount of text the model can remember involves quadrupling the amount of computer power. Newer architectures *might* fix this.
6. Liberalism: Since LLM's are trained using regular internet data, they tend to not be super polticially radical unless you are very selective with prompts (https://www.currentaffairs.org/2022/12/let-chatgpt-convert-you-to-socialism) this can be changed with different training data that it can more easily draw from.

## Strengths
0. Cost & Time: Data from early 2023 indicates that chatgpt cost 0.03 cents per word generated. This is almost certainly an underestimate as the costs of GPU's come down and model. Compare this to other types of labor that come out to 10 cents per word at the bare minimum. 
1. Breath of Knowledge: While an LLM may not have expert knowledge in any area, it makes up for that by having an amateur level of knowledge on every conceivable topic. To the point where it vastly exceeds the amount of knowledge attainable in a human lifetime.
2. Ease of Interaction: If you are using the AI as a search query tool it is often significantly easier to get the topic that you are looking for 
User: Whats the name of the thing where things get heavier and shorter depending on how they move?

Chat Gippity: Length contraction refers to the contraction of an object's length in the direction of its motion as observed by an observer in a different frame of reference. As an object's velocity increases, its length appears to decrease when measured by an observer in a different inertial frame.
Length contraction is a fundamental concept in Einstein's theory of relativity and have been confirmed by numerous experiments and observations.



# Goals
## Democratizing Lobbying
Currently one of the big issues with community based organizing is that organisations with good financing can hire or contract out lobbyists and experts enabling them to engage inside burocratic structures much more effectively. Consider how much more effective the Line 2 campaign could have been if activists were able to focus all of their energy on stopping the pipeline in the permitting process. 
## Direct Democratic Infrastructure
One big issue on certain energy democracy campaigns is that the prerequisite knowledge required to get people to engage means that building a community based democratic solution is almost impossible, this means that your organisation needs outside funding and essentially defeats the hope of having a completely democratic campaign
## Data on Campaign Effectiveness
A big problem with determining individual campaigns effectiveness comes down to lack of good examples, even the famous 2.5% engagement paper only had a sample size of 300, and asside from very bassic classifications of "Violent" or "Nonviolent" it is nowhere near enough examples to identify effective strategies from those campaigns. 
## Automated Power Maps


# Data Sources & Data Structs
For all of these it makes sense to take in the initital rough data and then create summaries with different levels of detail, potential structure tbd but something like an attention model on a knowledge graph sounds cool.
## Zoom and Recordings of Legislative Sessions
- Use a combination of whisper and other tools to generate transcriptions of sessions.
- Look into state of the art for voice recognition and separating out voices.
- Use LLM to intelligently through context name every individual speaking.
- Potentially use a multimodal model to extract and interprete slides and graphs.
- Categorization Required
## Public Email and ICS of Politicians and The Like
- Will Rely on some sorting mechanism to pick out important emails from the rest, similar tech will probably be needed on everything else.
## Enviornmental Monitoring and Energy Usage Data
- Having it in the same database as all of the other civil and legeslative proceedings has some potential underpants gnome style benefits. (https://youtu.be/tO4sxLapAts)
- Useful for specific campaigns.
## Foia Request Dumps
- Useful expecially as a cross refrence to what is said publicly by politicians
## Radical Political Theory
- Should be helpful in dealing with the inherent Liberalism in a lot of LLM models
## Latex from Arxiv
## Social Media Scraping
- https://i.redd.it/o5xypg00uac91.png
- Any other source of data is not going to be able to keep track of social movements or other local news. 
- If everyone else is being shitty and unethical about social media why shouldnt we?

## Model Agnosticism and Modularity = Good
Even though things seem like they are slowing down in the AI space since GPT 3, it is still progressing significantly faster then the rest of the space.  Any project that is maintainable in the long term needs to try to be a framework for gluing together smaller pieces of technology. With a good way to swap out models and refine different models with data that we gather.