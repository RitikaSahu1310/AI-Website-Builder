import generateResponse from "../config/openRouter.js";
import User from "../models/user.model.js";
import extractJson from "../utils/extractJson.js";
import Website from "../models/website.model.js";

const masterPrompt = `
YOU ARE A PRINCIPAL FRONTEND ARCHITECT
AND A SENIOR UI/UX ENGINEER
SPECIALIZED IN RESPONSIVE DESIGN SYSTEMS.

YOU BUILD HIGH-END, REAL-WORLD, PRODUCTION-GRADE WEBSITES
USING ONLY HTML, CSS, AND JAVASCRIPT
THAT WORK PERFECTLY ON ALL SCREEN SIZES.

THE OUTPUT MUST BE CLIENT-DELIVERABLE WITHOUT ANY MODIFICATION.

❌ NO FRAMEWORKS
❌ NO LIBRARIES
❌ NO BASIC SITES
❌ NO PLACEHOLDERS
❌ NO NON-RESPONSIVE LAYOUTS

--------------------------------------------------
USER REQUIREMENT:
{USER_PROMPT}
--------------------------------------------------

GLOBAL QUALITY BAR (NON-NEGOTIABLE)
--------------------------------------------------
- Premium, modern UI
- Professional typography & spacing
- Clean visual hierarchy
- Business-ready content
- Smooth transitions & hover effects
- SPA-style multi-page experience where useful
- Production-ready, readable code
- No lorem ipsum unless user specifically asks

--------------------------------------------------
RESPONSIVE DESIGN (ABSOLUTE REQUIREMENT)
--------------------------------------------------
THIS WEBSITE MUST BE FULLY RESPONSIVE.

YOU MUST IMPLEMENT:

✔ Mobile-first CSS approach
✔ Responsive layout for:
  - Mobile (<768px)
  - Tablet (768px–1024px)
  - Desktop (>1024px)

✔ Use:
  - CSS Grid / Flexbox
  - Relative units (%, rem, vw)
  - Media queries

✔ REQUIRED RESPONSIVE BEHAVIOR:
  - Navbar collapses / stacks on mobile
  - Sections stack vertically on mobile
  - Multi-column layouts become single-column on small screens
  - Images scale proportionally
  - Text remains readable on all devices
  - No horizontal scrolling on mobile
  - Touch-friendly buttons on mobile

IF THE WEBSITE IS NOT RESPONSIVE → RESPONSE IS INVALID.

--------------------------------------------------
IMAGES
--------------------------------------------------
- Use high-quality images ONLY from:
  https://images.unsplash.com/
- EVERY image URL MUST include:
  ?auto=format&fit=crop&w=1200&q=80
- Images must:
  - Be responsive
  - Use max-width: 100%
  - Resize correctly on mobile
  - Never overflow containers

--------------------------------------------------
TECHNICAL RULES
--------------------------------------------------
- Output ONE single HTML file
- Exactly ONE <style> tag
- Exactly ONE <script> tag
- NO external CSS
- NO external JS
- NO external fonts
- NO frameworks
- NO libraries
- Use system fonts only
- iframe srcDoc compatible
- No page reloads
- No dead UI
- No broken buttons
- JavaScript must not throw console errors
- Use DOMContentLoaded before attaching event listeners if needed
- Output must include <!DOCTYPE html>, <html>, <head>, and <body>

--------------------------------------------------
CRITICAL RENDERING RULES
--------------------------------------------------
- The website must render immediately inside iframe srcDoc
- Body must not be empty
- Body must not be fully black/blank unless user explicitly asks
- Do not use fixed/absolute layouts that hide main content
- Do not set all pages/sections to display:none
- At least ONE page/section must be visible on initial load
- If .page { display: none } is used, then .page.active { display: block } is REQUIRED
- Hiding all content is INVALID

--------------------------------------------------
LAYOUT & GRID RULES (ALL TYPES)
--------------------------------------------------
BEFORE writing any layout, identify what type of site/tool is being built
and apply the correct layout strategy:

BUSINESS / PORTFOLIO / LANDING PAGE:
  ✔ Hero section with headline, subtext, CTA button
  ✔ Features/services in CSS Grid (repeat(auto-fit, minmax(250px, 1fr)))
  ✔ Testimonials, footer, contact section
  ✔ Sticky navbar with smooth scroll

CALCULATOR / UNIT CONVERTER / CURRENCY CONVERTER:
  ✔ Display area at top (full width)
  ✔ Button grid: display:grid; grid-template-columns: repeat(4, 1fr); gap:10px
  ✔ Buttons in correct logical order for that tool type
  ✔ Special buttons (=, clear, operators) visually distinct colors
  ✔ Every button has onclick handler
  ✔ Result updates on every interaction

TODO APP / TASK MANAGER:
  ✔ Input area at top to add items
  ✔ List renders dynamically via JavaScript
  ✔ Each item has delete and complete toggle
  ✔ Filter tabs: All, Active, Completed
  ✔ Empty state message when no tasks

QUIZ / TRIVIA GAME:
  ✔ One question shown at a time
  ✔ Answer options as clickable buttons (CSS Grid 2 columns)
  ✔ Score tracked and displayed
  ✔ Next button appears after answer selected
  ✔ Final score screen at end

WEATHER APP / DASHBOARD:
  ✔ Search input at top
  ✔ Main stat card (large, prominent)
  ✔ Secondary stats in grid (humidity, wind, etc.)
  ✔ Use mock/static data if no API key provided

FORM / SURVEY / CONTACT PAGE:
  ✔ Clearly labeled inputs with placeholders
  ✔ Full JS validation (empty check, email format, etc.)
  ✔ Success message shown after valid submit
  ✔ No page reload on submit

TIMER / STOPWATCH / CLOCK:
  ✔ Large prominent display (font-size: clamp(3rem, 10vw, 6rem))
  ✔ Control buttons centered below (Start, Stop, Reset)
  ✔ Interval-based JavaScript logic
  ✔ Lap feature if stopwatch

ECOMMERCE / PRODUCT PAGE:
  ✔ Product grid: repeat(auto-fit, minmax(220px, 1fr))
  ✔ Each card: image, name, price, Add to Cart button
  ✔ Cart count updates dynamically
  ✔ Filter/sort controls at top

BLOG / NEWS / ARTICLE SITE:
  ✔ Hero article featured large
  ✔ Article cards in responsive grid
  ✔ Each card: image, title, excerpt, Read More button
  ✔ Category filter tabs

GAME (snake, memory, puzzle, etc.):
  ✔ Canvas or CSS Grid game board
  ✔ Keyboard and touch controls
  ✔ Score display
  ✔ Restart button always visible
  ✔ Game loop using requestAnimationFrame or setInterval

FOR ANY OTHER TYPE NOT LISTED:
  ✔ Analyze what the user wants
  ✔ Use CSS Grid or Flexbox for all layouts
  ✔ Never use float or table for layout
  ✔ Every interactive element must have a working JS handler
  ✔ No static/dead UI elements

--------------------------------------------------
FUNCTIONAL REQUIREMENTS (ALL TYPES)
--------------------------------------------------
- Every button, link, tab, toggle must perform a real action
- No button should exist without an onclick or event listener
- Forms must validate and show feedback
- Dynamic content must render via JavaScript
- State must update visually on every user interaction
- No broken, placeholder, or dummy functionality
- If data is needed (weather, stocks, etc.) use realistic mock/static data
- Smooth transitions on all state changes (opacity, transform)

--------------------------------------------------
REQUIRED DEFAULT PAGES FOR NORMAL WEBSITES
--------------------------------------------------
For normal business, portfolio, agency, product, service, or landing websites, include:
- Home
- About
- Services / Features
- Contact

If user asks for a specific app/tool like calculator, todo app, converter, game, etc.,
build that tool as the main focus and include only relevant sections.

--------------------------------------------------
FINAL SELF-CHECK
--------------------------------------------------
BEFORE RESPONDING, ENSURE:

1. Layout works on mobile, tablet, desktop
2. No horizontal scroll on mobile
3. All images are responsive
4. All sections adapt properly
5. Media queries are present and used
6. Navigation works
7. At least ONE page/section is visible immediately
8. JavaScript has no obvious errors
9. Every button performs a real action
10. Layout uses correct CSS Grid/Flexbox for the site type
11. No dead, broken, or placeholder UI
12. Output is valid raw JSON only

IF ANY CHECK FAILS → RESPONSE IS INVALID.

--------------------------------------------------
OUTPUT FORMAT
--------------------------------------------------
RETURN RAW JSON ONLY:

{
  "message": "Short professional confirmation sentence",
  "code": "<FULL VALID HTML DOCUMENT>"
}

--------------------------------------------------
ABSOLUTE RULES
--------------------------------------------------
- RETURN RAW JSON ONLY
- NO markdown
- NO explanations
- NO extra text
- FORMAT MUST MATCH EXACTLY
`;

export const generateWebsite = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "prompt is required" });
        }

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }

        if (user.credits < 50) {
            return res.status(400).json({
                message: "you have not enough credits to generate a website"
            });
        }

        const finalPrompt = masterPrompt.replace("{USER_PROMPT}", prompt);

        let raw = "";
        let parsed = null;

        for (let i = 0; i < 2 && !parsed; i++) {
            raw = await generateResponse(finalPrompt);
            parsed = await extractJson(raw);

            if (!parsed) {
                raw = await generateResponse(finalPrompt + "\n\nRETURN ONLY RAW JSON.");
                parsed = await extractJson(raw);
            }
        }

        if (!parsed || !parsed.code) {
            console.log("ai returned invalid response.");
            return res.status(400).json({ message: "ai returned invalid response" });
        }

        const website = await Website.create({
            user: user._id,
            title: prompt.slice(0, 60),
            latestCode: parsed.code,
            deployed: false,
            conversation: [
                {
                    role: "user",
                    content: prompt
                },
                {
                    role: "ai",
                    content: parsed.message || "Website generated successfully"
                }
            ]
        });

        user.credits = user.credits - 50;
        await user.save();

        return res.status(201).json({
            websiteId: website._id,
            remainingCredits: user.credits
        });

    } catch (error) {
        return res.status(500).json({
            message: `Generate website error ${error.message}`
        });
    }
};

export const getWebsiteById = async (req, res) => {
    try {
        const website = await Website.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!website) {
            return res.status(400).json({ message: "website not found" });
        }

        return res.status(200).json(website);

    } catch (error) {
        return res.status(500).json({
            message: `get website by id error ${error.message}`
        });
    }
};

export const changes = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "prompt is required" });
        }

        const website = await Website.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!website) {
            return res.status(400).json({ message: "website not found" });
        }

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }

        if (user.credits < 25) {
            return res.status(400).json({
                message: "you have not enough credits to update a website"
            });
        }

        const updatePrompt = `
YOU ARE UPDATING AN EXISTING COMPLETE HTML WEBSITE.

IMPORTANT RULES:
- Keep the website as ONE complete HTML file
- Keep exactly ONE <style> tag
- Keep exactly ONE <script> tag
- Do not remove existing working features unless user asks
- Do not make the page blank
- Do not hide all content
- At least one main section/page must be visible immediately
- Preserve responsiveness for mobile, tablet, and desktop
- Fix any broken HTML, CSS, or JavaScript while applying the user's request
- JavaScript must not throw console errors
- All buttons must work and perform real actions
- iframe srcDoc compatible
- No external CSS, JS, fonts, frameworks, or libraries
- Use only HTML, CSS, and JavaScript
- Return the FULL updated HTML document, not partial code

LAYOUT PRESERVATION RULES:
- If the site uses CSS Grid for a button layout (calculator, converter, game pad), preserve the grid structure exactly
- If the site has tabs or multi-page navigation, preserve all tab/page switching logic
- If the site has a list that renders dynamically, preserve the JS rendering logic
- If the site has a game loop (setInterval, requestAnimationFrame), preserve it
- Never replace a working CSS Grid layout with floats or inline-block
- Never remove event listeners that are already working

FUNCTIONALITY RULES:
- Every button must still perform its action after the update
- If user asks to change color/style, only touch CSS — do not break JS
- If user asks to add a feature, add it without removing existing features
- If user asks to fix a bug, fix only that bug and leave everything else untouched
- Validate all forms with JS after update
- All dynamic rendering must still work after update

CURRENT WEBSITE CODE:
${website.latestCode}

USER REQUEST:
${prompt}

RETURN RAW JSON ONLY:
{
  "message": "Short confirmation",
  "code": "<FULL UPDATED VALID HTML DOCUMENT>"
}
`;

        let raw = "";
        let parsed = null;

        for (let i = 0; i < 2 && !parsed; i++) {
            raw = await generateResponse(updatePrompt);
            parsed = await extractJson(raw);

            if (!parsed) {
                raw = await generateResponse(updatePrompt + "\n\nRETURN ONLY RAW JSON.");
                parsed = await extractJson(raw);
            }
        }

        if (!parsed || !parsed.code) {
            console.log("ai returned invalid response.");
            return res.status(400).json({ message: "ai returned invalid response" });
        }

        website.conversation.push(
            {
                role: "user",
                content: prompt
            },
            {
                role: "ai",
                content: parsed.message || "Website updated"
            }
        );

        website.latestCode = parsed.code;

        await website.save();

        user.credits = user.credits - 25;
        await user.save();

        return res.status(200).json({
            message: parsed.message || "Website updated",
            code: parsed.code,
            remainingCredits: user.credits
        });

    } catch (error) {
        return res.status(500).json({
            message: `Update website error ${error.message}`
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const websites = await Website.find({
            user: req.user._id
        }).sort({ updatedAt: -1 });

        return res.status(200).json(websites);

    } catch (error) {
        return res.status(500).json({
            message: `get all website error ${error.message}`
        });
    }
};

export const deploy = async (req, res) => {
    try {
        const website = await Website.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!website) {
            return res.status(400).json({ message: "website not found" });
        }

        if (!website.slug) {
            website.slug =
                "website-" +
                Date.now() +
                "-" +
                Math.random().toString(36).substring(2, 8);
        }

        website.deployed = true;
        website.deployUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/site/${website.slug}`;

        await website.save();

        return res.status(200).json({
            message: "website deployed successfully",
            url: website.deployUrl,
            website
        });

    } catch (error) {
        return res.status(500).json({
            message: `deploy website error ${error.message}`
        });
    }
};

export const getBySlug = async (req, res) => {
    try {
        const website = await Website.findOne({
            slug: req.params.slug,
            deployed: true
        });

        if (!website) {
            return res.status(400).json({ message: "website not found" });
        }

        return res.status(200).json(website);

    } catch (error) {
        return res.status(500).json({
            message: `get by slug website error ${error.message}`
        });
    }
};
