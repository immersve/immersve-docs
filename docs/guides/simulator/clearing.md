---
sidebar_position: 4
tags:
  - simulator
---

# Clearing

A clearing acts in a very similar way to clearing without auth, however the card information that is used is based upon the initial authorization that was executed. When executing this `clearing` action, the user is prompted to enter a value. This allows for partial clearings to be made, where the amount being cleared may be less than the initial amount of authorized funds. 

Like with direct clearing without auth, this step will process the transaction, changing its status to the current date in the Immersve dashboard.