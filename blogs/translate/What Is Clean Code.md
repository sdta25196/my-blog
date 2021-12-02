## What Is Clean Code?

> 什么是简洁代码

Clean code is a philosophy that I follow when I code. Actually, to me, it feels more like a religion than a philosophy! It’s the idea that your code should be precise and as close to perfect as possible. If you have more code than you need, it shouldn’t be there. There shouldn’t be anything superfluous, and I go so far as to say that there shouldn’t even be superfluous whitespace. You want your code to be as efficient, readable, and maintainable as possible, and instead of only “solving the problem.” I always put in the extra time to also focus on the design of my code.

> “简洁代码”是我在写代码中一直以来遵循的一条理论。事实上，对于我来说，与其说是一种理论，不如说是一种信仰。他是这么一种理念——你的代码必须够简洁且尽可能接近于完美。如果你所写出来的代码比你所需要的多，那么多出来的那部分代码不应该存在其中。任何的多余都是不可能容忍的，而且一直以来我甚至觉得一个空格都不允许多余。你要让你的代码不仅仅是解决了问题，而是尽可能的有效率、可读性好、易维护。同样，我经常花很多额外的时间去设计我的代码。

It all started in 2001 when I was reading the Pragmatic Programmer by Andy Hunt and Dave Thomas. I read statements (like, “never accept a broken window,”) that resonated with me.

> 所有的一切开始于 2001 年，当时我正在读 Andy  Hunt 和 Dave  Thomas 写的《程序员修炼之道》。读到其中如“永远不要接受一个坏了的窗口”之类的观点时，让我产生了共鸣。

It’s very easy to visualize this. Imagine that you have a house and it starts to fall apart because there’s no blueprint to fix it, and it gets worse and worse until the roof caves in. Or, you have a shopping cart that’s been abandoned on the street corner and that people start throwing their trash into. Pretty soon, the whole cart is full of garbage that then spills over. In both cases, if you don’t set clear boundaries and rules, you’ll run into problems in the long term. I’ve joined new companies before where the teams have created dirty code, and it’s not fun to work there. I realized that when people start off lazy with no sense of responsibility for their code, it very quickly starts to decay. They then end up having to spend hours and hours fixing and refixing the lines every time a change is made somewhere else. Nobody needs code like that.

> 这设想起来十分简单。想象下，你有一间房子，然后因为没有设计图来修复它，墙面开始裂开，然后越来越严重，直到房顶坍塌。或者你有一辆购物手推车，你把它遗弃在街角，然后人们开始往里面扔垃圾。很快，整个推车都将塞满垃圾直到溢出来。在以上两种情况中，如果你不设定好清楚的界限和规则，长久之后你肯定会遇到问题。我以前入职过一家新公司，那里的团队写出很多脏代码，在那里工作一点都不开心。我意识到，当人们开始变得懒惰，对自己的代码毫无责任心时，问题就会累积。结果是，每一次有更新时，他们都要花不知道多少时间去进行一次次修改。没有人需要这样的代码。

I refer to myself as a pragmatic perfectionist. It means that on one hand, I deal with problems that exist in a specific situation in a reasonable and logical way instead of just depending on vague ideas and theories. On the other hand, I want my code to be perfect as possible the first time, not because I like wasting time, but because I’m thrifty enough to see that it’ll save me way more time later on.

> 我把自己称作是实用至上的完美主义者。这意味着，一方面，在特定情况下我解决问题时，使用的方法一般是合理并且恰当的，而不是依赖于模糊的想法和理论。另一方面，我希望我的代码能够在第一次就尽可能完美，不是我喜欢浪费时间，而是因为足够节约，我知道这将在之后给我省下更多时间。

## How to Implement Clean Coding Design

> 如何完成“简洁代码”设计

So, how does one create clean code? Well, first of all, you can’t think of your project as a coding project; you have to think of it as a designing and planning process. Developers often rush into the code because they feel pressure from their managers or whomever to get the job done quickly. In contrast, a clean coder makes sure he fully understands the problem before beginning to code. Imagine you’re building a house, but you decide to only build a flimsy foundation. If you then decide to expand the house, you’re going to have to waste more time and money rebuilding the foundation. That’s why, to me, the first step in the process is to have a discussion with the client to find out exactly what he or she wants.

> 那么，该怎样创造“简洁代码”呢？首先，你不能把你的项目当做一个代码项目；你要把它想象成一个设计和计划的过程。很多开发者经常一头猛扎进代码中一顿乱敲，因为他们受到他们领导们或者其他人的要求完成尽快任务的压力。相比之下，一个具有“简洁代码”编写习惯的开发者，会尽量确保自己在开始敲代码前已经理解了问题的重点所在。想象下你正在建一栋房子，而你却打算建一个薄弱的地基，如果你之后想要扩大你的房子，你将花费更多的时间和金钱去重筑地基。这就是为什么，对我来说，程序的第一步，就是和客户方了解清楚，他需要的结果具体是什么样的。

That leads me to the next step for clean code: creating this common language, or a “ubiquitous language,” if you follow the ideas of Domain-Driven Design. The wording of code is very important because you want your variable names, class names, and package names to make sense no matter who is looking at the code. Now, some developers will say, “For God’s sake, let’s just use some stupid name and change it later.”

> 如果您遵循领域模型驱动设计，那么下一步让代码简洁的方法是：创建共用语言或“领域通用语言”。 代码的用词非常重要，因为您希望您的变量名称，类名称和包名称无论谁查看代码都能理解。 现在有些开发者会说：“拜托，我们只用了一些愚蠢的名字，稍后再改。”

While this may appear to be the quickest solution, the team, or even the same developer who wrote it, might get lost in these directionless names. Every abstract word in the code might give different team members different concepts as to the direction of the project. If I’m thinking of programming a pear and you’re thinking of programming an apple, we’ll end up with a useless apple-pear hybrid.

> 虽然这看起来是最快的解决办法，但是团队，甚至是编写它的开发人员，可能会迷失在这些无意义的名字中。 代码中的每个抽象词语可能会给不同的团队成员带来不同的关于项目方向的概念， 如果我考虑编写一个梨，而你考虑编写一个苹果，我们最终会得到一个无用的苹果梨混合词。

If everyone involved, from clients through to developers, communicates well during the design process, we initiate this common “ubiquitous language” that evolves with the project. The goal is a complete, understandable program, written by an entire team, yet looking as if it has been written by an individual. It should consist of simple elements that join together to communicate complex ideas. We should avoid terms that are ambiguous and don’t convey proper understanding. Communicating in this manner will help us prevent problems, rather than having to fix them later. Now, we can confirm whether the client wants an apple or a pear, resulting in a satisfied client at the end. That extra hour spent on discussions at the beginning can really assist the direction of a project and save many hours later on.

> 如果每个人都参与进来，从客户到开发人员，在设计过程中进行良好的沟通，我们就开启了这门与项目一起发展的通用的“无处不在的语言”。目标是一个完整的、可理解的程序，由整个团队编写，但看起来好像是由一个人编写的。它应该由简单的元素组合在一起，来传达复杂的思想。我们应该避免模棱两可的术语而传达不了恰当的理解。以这种方式进行沟通将有助于我们预防问题，而不是以后再解决问题。现在，我们可以确认客户想要苹果还是雪梨，最终达成客户满意的结果。在刚开始时花些时间讨论，如果可以真正帮助选择项目的进行方向 ，就可以为以后节省许多时间。

## Estimation Gambling

> 估算上的赌博

One of the difficulties with clean coding is estimating your timeframe. A lot of developers have a fear of being honest with their managers, which is why I think it’s important to trust your manager. Say you have a gut feeling that a project will take ten days, but you’re scared to say “ten days,” so you figure, “Well, if I work really hard and I work extra hours and if everything works fine, I should be able to make this in eight days.” I call this estimation gambling. So, you’ve decided on a timeframe and you go to your boss or client and you say, “I’ll make it in eight days.” Guess what? Many managers will come back to you and say, “I’ll give you four!” So, a project that you know will probably take ten days, if it’s bug-free, is now getting barely any time, and now you’re rushed and you can’t make the code as clean as you should.

> 整洁编码的难点之一是估算你的时间表。许多开发人员害怕对他们的经理诚实，这就是为什么我认为信任你的经理是很重要的。比方说你有一种直觉，认为一个项目需要十天，但是你害怕说“十天”，所以你会想：“嗯，如果我真地很努力，我加班，如果一切顺利的话，我应该能在八天内完成这项工作。” 我称之为估算上的赌博。于是，你就定下一个时间表，走到老板或客户跟前说： “我会在八天内搞定它。”你猜怎么着？许多经理会回你一句：“我给你四天时间！” 于是，一个你认为很可能要花十天时间的项目，如果没有缺陷（bug）的话，现在变得几乎没有时间了，现在你很忙，以至于你无法顾及你本应该做到的代码整洁。

Usually, I take everything into account. If I feel like a project will take ten days, I usually tell my client fifteen. That doesn’t mean I spend the first five days lounging around. I try my hardest to finish that project based on my gut feeling, but it often happens that my clients will change requirements, or maybe my initial design won’t work out, so I’ll need those extra five days.

> 通常，我把一切都考虑进去。如果我觉得一个项目需要十天，我通常会告诉我的客户十五天。那不是说我一开始先花五天四处闲逛。我尽我最大的努力按我直觉的时间完成那个项目，但经常发生的是，客户改变需求，或者可能我最初的设计不可行，所以我需要那额外的五天。

This is a hard thing for a developer to do, especially when your co-worker claims he or she can do it in half the time. Sure, maybe they'll get this job, but when the result is crap, you’ll get the next one. On a flexible team, your boss might let you have extra time if you don’t finish on time, but that’s also gambling. A client will rarely be as forgiving. Never gamble with how much time you’ll take. You have to have trust in yourself and in your knowledge.

> 对于开发人员来说，这是一件困难的事情，尤其是当你的同事声称他或她能在一半时间内完成。当然，也许他们会得到这份工作，但是，当结果是一坨屎时，你就会得到下一份工作。在一个灵活的团队里，你的老板可能会让你有额外的时间，如果你不能按时完成，但那也是在赌博。客户很少会那么宽容。永远不要赌你要花多少时间。你必须相信你自己，相信你的知识。

To me, being a software craftsman is about having a focused attitude and about taking responsibility for your code, your job, and your time. So, from beginning discussions to end results, your one focus should be on maintaining your own high standards and creating the best possible product for your client.

> 对我来说，做一个软件工匠就是要有一种专注的态度，对你的代码、工作和时间负责。所以，从开始讨论到最终结果，你的一个焦点应该是保持你自己的高标准，尽可能为你的客户创造最好的产品。

## System Design

> 系统设计

OK, so now that we have our vision, our common language, and our timeframe, we can begin to actually plan out our code. The way I do this is by drawing boxes on a white board that represents our system and how different components of our system will work together. The goal of this is to visualize how our system will function and to discuss the most efficient way to have our components interact. When you find complexity in your design, look for ways to simplify — complex areas are hotbeds for bugs and code breaking.

> 好了，所以现在我们有了我们的远景、共同语言和时间表，我们可以开始计划我们的代码了。我做这事的方法是在白板上画方框，表示我们的系统，以及我们系统的不同组件如何在一起工作。这样做的目的是可视化我们的系统将如何运行，并讨论使组件相互作用的最高效的方法。当你发现你的设计错综复杂，就要寻找方法来简化，因为错综复杂的区域是缺陷（bug）和代码崩溃的温床。

Now, you’ve got your design, but what about your neighbor? His idea for developing the same system might be completely different than yours, and this is where we have more discussion. Working in small groups, I always believe developers should debate and discuss their system. This helps to make the system more efficient and effective. It also helps to maintain a unified vision for the code and keep team spirits up as everyone is working together.

> 现在，你有了自己的设计，但是你的同事呢？他开发相同系统的想法可能与你的完全不同，而这正是我们需要更多讨论的地方。在小组工作时，我一向认为开发人员应该争辩和讨论他们的系统。这有助于提高系统的效率和效用。这也有助于保持统一的代码远景，并保持高昂的团队精神，因为每个人都在一起工作。

I like to take these boxes as an opportunity for further communication with the client. They don’t usually understand code, but they do understand boxes and drawings with business terms in them. You can ask them, “Is this what you were thinking of?” and have them participate in the process. This is one of the most powerful aspects of system design that many developers fail to utilize because even people who don’t understand code can still understand the overall concept of the design.

> 我喜欢拿这些方框图作为与客户进一步沟通的机会。他们通常不懂代码，但他们理解带有商业术语注解的方框图。你可以问他们：“这是你所想的吗？” 并让他们参与这个过程。这是许多开发人员未能利用的系统设计中最强大的方面之一，因为即使是不懂代码的人，仍然能够理解设计的总体概念。

Don’t be overly concerned when disagreements amongst the team and between the team and client arise. A disagreement is a great indicator that further refinements or adjustments are needed, and should be seen as a chance to improve the result, rather than as a threat. They just mean that you need to talk more until you come to a common understanding. A lightweight, team-based approach with open discussion is key here. Companies with flat hierarchies have an easier time promoting this type of discussion. Always get the client involved in the discussion as early as possible. Sometimes, the reason for the difference of opinion might be that the client is unaware that their choices may lead to bad performance, difficult maintainability, or high costs. So, ask them, “Do we really need this feature now? If we do, can we simplify it?”

> 当团队之中或团队与客户之间出现分歧时，不要过于担心。分歧是一个很好的征兆，意味着需要进一步的改进或调整，应该被看作是改善结果的机会，而不是威胁。这些征兆仅仅意味着你们在达成共识之前需要多说。一个轻量级的、基于团队的开放讨论是这里的关键方法。等级扁平的公司更容易促成这种讨论。总是要尽早让客户参与讨论。有时，意见不同的原因可能是客户不晓得他们的选择会导致性能不佳、维护困难或成本高昂。所以，问他们：“我们现在真的需要这个功能吗？如果需要，我们能简化它吗？”

From the other side, developers are often unaware of the compelling business reasons that may have led the client to ask for the added complexity. Often, clients want a lot of unnecessary features, and the developers try to provide them. While I believe that the developer’s job is to enable the client, you would not be doing the client a favor by just following his or her instructions blindly without challenging those that appear impractical to you. Differences need to be thrashed out with lots of respect and trust on both sides. If you manage to put ego aside and facilitate this process, the results are bound to be fruitful for both sides. Both sides must keep asking questions and challenging each other’s point of view until they come to a common understanding. This will highly increase the chances of producing a successful product that does exactly what the client needs it to do.

> 从另一方面来看，开发者经常没有意识到，一些无法抗拒的商务因素往往会导致客户把任务变得更加地复杂。客户方面经常会提出一些不必要的需求，然后开发者们就尝试满足他们。但是我相信，开发者的工作不是这样的，不要为了迎合客户而盲目地接受用户的需求，当你觉得某些需求不切实际的时候，应当主动说出来。战胜分歧，需要双方对彼此抱有足够的尊重和信任。如果你能把自我放在一边并促进这个过程，结果将会是双赢。双方都必须不断问对方问题和挑战对方观点，直到达成共识。这样一来，才能最大可能地为客户创造出真正想要的产品。

On top of this, one of the things I often hear developers say is, “Oh, let’s add some extra feature because we might need it in the future.” Never do that. I used to do that, but I’ve realized it’s a useless waste of time. Worse than that, it’s actually harmful. When you over-complicate the code by adding extra features, you are making the code harder to read, understand, maintain, and test. By doing this, you’re inviting bugs into your code. So, these unnecessary extra features are truly evil! You don’t know the future, and nine out of ten times your assumption will be wrong. Even if you were right that a feature would be necessary later, it might only be needed two years down the road, and by then, you might have found a better way to do it.

> 除此之外，我经常听到开发者谈及的一件事是，“哦，让我们添加一些额外的功能，因为我们将来可能需要它。”永远不要这样做,这是无谓的时间浪费。更糟糕的是，它实际上是有害的。当你通过添加额外的功能来使代码复杂化时，你将使代码更难阅读、理解、维护和测试。这样做也容易在代码中引入错误。所以，这些不必要的额外功能真的是有害的！你不知道未来如何，所以你的假设有 90% 的可能是错误的。即使是对的，但要用到该功能可能是在两年之后的事情了，那时候，你可能已经找到了一个更好的方法。

If you’re building a house and you decide to add an extra room once the foundation has been laid, it’s going to cost huge amounts of time and money. On the other hand, software is different. Software can be changed iteratively for a much lower cost. Changing it is not easy, but it's certainly a lot easier than adding rooms to a house. The better the software has been built, the easier and therefore cheaper it will be to make changes. As a programmer, simplistic code is what you should always strive for.

> 如果你正在建房子，一旦建好了地基，你决定添加一个额外的房间，这将花费大量的时间和金钱。另一方面，软件是不同的。软件可以以较低的成本进行迭代更改。改变它是不容易的，但这肯定比在一个房子上添加房间更容易一些。软件架构的越好，就越容易，维护的成本就更便宜。作为程序员，简单的代码应该作为永远的追求。

## Writing the Code

> 开始写代码

Finally, after all of this designing, you can start coding. As you can see, there is a lot going on before the coding even starts, and that’s one of the differences between clean code and dirty code: the design behind it.

> 终于，经过充分的设计之后，可以开始写代码了。你可以看到，在写代码之前，还是有很多事情需要做的，这就是“简洁代码”和“脏乱代码”的区别——设计在前。

A misunderstanding many people have is that because of all the time they spent on design, their code will be better right away and it can just be written in a straightforward way. That isn’t the case. You should still stay regimented and carefully craft and test your code, even if you think your design is flawless. There is much more to software development than just doing a quick design and writing a few lines of code.

> 很多人经常容易误解，我已经花了那么多时间来设计了，那么我的代码就将马上变得更好，只需要直截了当的写出来就可以了。其实并不是这样。你仍然需要在编程过程中保持足够的严谨和细心，并且尽可能的测试你的代码。即便你认为你的设计是完美无瑕的，也仍然要这么做。软件开发可不仅仅是做个快速设计然后写几行代码这么简单。

In an ideal situation, you should start with tests. If possible, I recommend using Test-Driven Development, TDD. Start off with an integration or acceptance test that fulfills a concrete business goal, and then follow that with many smaller unit tests. You should write the code after you write the test and then as soon as you have a green test, you can restart and refactor your code.

> 在一个理想状况下，你应当从测试开始。如果可能的话，我推荐使用测试驱动开发方法，TDD。从实现具体业务目标的集成测试或者验收测试开始，然后按照各个小的测试单元一项一项来。你应该在你写完测试要求后，然后再开始写代码，只要你有一个科学的测试过程，重写或者重构你的代码都将十分简便。

This “test-first” approach is very challenging for an organization that does not have flat organizational structures. To be able to work like this, an organization needs to be based on open communication and an iterative experimental approach without a hierarchical, top-down management style. The managers need to fully trust their team and hand over responsibility to them. However, there is still a long way to go with implementing this approach in most companies, where there are still many fears and blockades to contend with. This approach remains in strong contrast to the hierarchical management culture still found in the majority of organizations today.

> 对于拥有非平坦型的组织结构的组织来说，这种“测试优先”的方法是非常具有挑战性的。为了能够如此工作，一个组织需要基于开放沟通和迭代的实验方法，而不是需要分层的、自上而下的管理风格。管理者需要完全信任他们的团队，并将责任交给他们。 然而，在大多数仍然有许多恐惧和封闭的公司中，这仍然有很长的路要走。这种方法与当今大多数组织仍然存在的层级管理文化形成鲜明的对照。

Because of this, we need to start with small steps, and hopefully, companies will evolve over time. One small step is to replace the “test-first” with a “test-last” approach — what matters most, at the end of the day, is that the code is actually tested. The test will refine our requirements again and allow us to focus on the functionality of our code — that is, its design and structure, rather than how it operates technically. A developer needs to remember that he or she is primarily coding for the business, and not for him or herself, so the wording needs to be very clear. A misunderstanding of any kind among developers is going to result in a bug. Granted, this kind of bug won’t stop your code from working, but when another developer tries to use your methods in a way you hadn’t intended, further bugs will result.

> 因此，我们需要以小步骤开始，同时企盼公司能够随着时间的推移而发展。 一个小的步骤是用“测试优先”方法来取代“测试最后”，最重要的是，在一天结束的时候最终的代码是实际测试的代码。测试将再次改进我们的要求，并允许我们专注于代码的功能 - 即其设计和结构，而不是其在技术上的运作方式。开发人员需要谨记，他/她主要是为企业编码，而不是为自己编写，所以措辞需要非常清晰。开发人员之间的任何误解都会导致错误。可以肯定的是，此类错误不会引起你的代码无法工作，但是当另一个开发人员试图以你计划以外的方式使用你的方法时，会导致进一步的错误。

I usually compare writing code to writing a book. No author writes their book starting with chapter one, then moving on to chapter two, all in order, making each one perfect before starting the next. An author starts off with an outline, then starts improving every page, then revises again and again until finally, the book is perfect. In terms of coding, that means moving past the first green test and recognizing that the “but it works” philosophy isn’t a good one. You have to improve on your code until it is perfect. You’re not only testing to see if the code works; you’re also testing to make it as clean and precise as possible.

> 我通常拿写代码和写书进行比较。没有作者会严格按照顺序去写，他们不会把前面的章节写完美了才开始下面的部分。一般的作者总是从一个轮廓开始，之后再来改进每一页，并不断修正直至完美。在编码上，经过一轮测试并得出“代码能工作”并不是好的代码标准。你必须改进你的代码直到它变得完美。如果代码能工作了，你不仅仅要测试，你还要一直保证代码尽可能明晰。