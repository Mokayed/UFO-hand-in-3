# UFO-hand-in-3
## Service hosted on Digital Ocean server in Frankfurt
This project is an experiment on how well the server in Frankfurt will perform regarding the responsetime from different geographic locations. Furthermore the experiment will have an execution and from there, evaluate the respective outcome.  
### Hypothesis
 **"When the server is far away from its clients, the responsetime will have an negative impact on its client"**
### Planning of the experiment
With this experiement, we are going to host a web service in Frankfurt, and have multiple clients around the world. This is being accomplished by having a VPN that requests data from specific areas around the world(Asia, America, Europe etc..)
### Execution of experiment:
### Technologies:
- JavaScript v1.7
- NodeJS v10.16.0
  - express v4.17.1
  - node fetch v2.6.0
- npm v6.13.0
- Droplet on Digital Ocean
- ProtonVPN(free version)
### Clients list(areas of where the request was made):
-   **_Taipei, Taiwan_**
-   **_Phenix, USA_**
-   **_Montreal, Canada_**
-   **_Copenhagen, Denmark_**
-   **_London, Great Britian_**
-   **_Johannesburg, South Africa_**
-   **_Sydney, Austalia_**
-   **_Auckland, New Zealand_**
-   **_Mumbai, India_**
#### Results: 
-   **_Taipei, Taiwan:_** 6.6213ms
-   **_Phenix, USA:_** 3.733ms
-   **_Copenhagen, Denmark:_** 2.412ms
-   **_Johannesburg, South Africa:_** 5.085ms
-   **_Sydney, Austalia:_** 4.7533ms
-   **_Auckland, New Zealand:_** 7.4571ms
-   **_Mumbai, India:_** 3.53ms
### Evaluation and conclusion
Throughout the execution of the experiment and the results, we can see a significant downgrade of the responsetime of our server, depending on where the client is requesting the data from. We tried to do this as simple as possible(by responding with nothing more than a "Hello World!" string), and the results talks for themselves. The longer the distance, the higher the responsetime. To see this in retrospect, there are tools designed to eliminate these problems. One of the most popular solutions(in these modern days) is **_Geo-redundancy_**. This term refers to replication of multiple instances across the world, lowering the responsetime due to redudancy of locations. 
<img src="https://github.com/Mokayed/UFO-hand-in-3/blob/master/geo-redundancy-featured.jpg"/>
This tool could increase responsetime significantly.
### Conclusion

We can conclude that the complaints from USA and Asia were legit. This was proofed by the numbers that USA took almost 4 seconds, and that Asia took almost 7. This means that the new server should be somewhere between USA and Asia (could be New Zealand for example)


