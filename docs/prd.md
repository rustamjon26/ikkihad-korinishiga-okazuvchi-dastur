# ComplexCurve Converter - Complete Software Specification & README

## 1. Project Overview

### 1.1 Project Name
**ComplexCurve Converter**

### 1.2 Project Type
Full-stack educational web application designed for university software engineering projects

### 1.3 Project Purpose
ComplexCurve Converter is a comprehensive web platform that enables students and educators to convert second-order plane curve equations from Cartesian coordinate form (x, y) into complex variable form (z, z̄). The platform provides user authentication, personal dashboards, conversion history tracking, and administrative tools for user management and activity monitoring.

### 1.4 Target Users
- University students studying analytic geometry and complex analysis
- Mathematics educators
- Researchers working with complex plane transformations
- System administrators managing the platform

### 1.5 Default Platform Language
Uzbek (with multilingual support for Russian and English)

---

## 2. Problem Statement

Students learning analytic geometry often struggle with manually converting plane curve equations from Cartesian form to complex form. This process involves:
- Understanding complex number theory
- Applying substitution formulas correctly
- Performing algebraic manipulations without errors
- Verifying results through multiple steps

Current solutions lack:
- Step-by-step transformation visualization
- Personal history tracking for learning progress
- Accessible web-based interface
- Multi-user support with role-based access

---

## 3. Solution Overview

ComplexCurve Converter addresses these challenges by providing:
- Automated equation conversion with mathematical accuracy
- Clear step-by-step transformation display
- User authentication and personalized dashboards
- Conversion history storage for each user
- Admin panel for platform management
- Responsive design for all devices
- Multilingual interface (Uzbek, Russian, English)

---

## 4. Core Features

### 4.1 Authentication System
- User registration with email verification
- Secure login with session management
- Password reset functionality
- Role-based access control (User/Admin)

### 4.2 Equation Converter
- Input validation for second-order plane curves
- Real-time conversion from Cartesian to complex form
- Step-by-step transformation display
- Support for Circle, Ellipse, Parabola, Hyperbola
- Copy and save conversion results

### 4.3 User Dashboard
- Welcome section with user statistics
- Recent conversions overview
- Quick access to converter tool
- Conversion history management
- Profile settings

### 4.4 Admin Panel
- User management (view, search, filter, deactivate)
- Platform activity monitoring
- Conversion statistics across all users
- System overview dashboard

### 4.5 Multilingual Support
- Language switcher (Uzbek/Russian/English)
- Localized UI text and content
- Persistent language preference

---

## 5. MVP Scope

### Phase 1 - Core Functionality
- User registration and login
- Basic equation converter (4 curve types)
- User dashboard with conversion history
- Profile management
- Admin user list view

### Phase 2 - Enhanced Features
- Step-by-step transformation display
- Save and copy conversion results
- Admin activity monitoring
- Search and filter functionality

### Phase 3 - Polish
- Multilingual support
- Dark mode toggle
- Graph visualization (optional)
- Toast notifications
- Loading states

---

## 6. Future Scope

- Support for higher-order curves
- 3D curve transformations
- Export conversion history to PDF
- Collaborative features (share conversions)
- Mobile native applications
- Integration with learning management systems
- Advanced graph plotting with interactive controls
- LaTeX equation input support
- Batch conversion processing

---

## 7. User Roles and Permissions Matrix

| Feature | Guest | User | Admin |
|---------|-------|------|-------|
| View landing page | ✓ | ✓ | ✓ |
| Register account | ✓ | - | - |
| Login | ✓ | ✓ | ✓ |
| Use converter | - | ✓ | ✓ |
| Save conversion history | - | ✓ | ✓ |
| View own history | - | ✓ | ✓ |
| Edit profile | - | ✓ | ✓ |
| View all users | - | - | ✓ |
| Manage users | - | - | ✓ |
| View platform activity | - | - | ✓ |
| Access admin panel | - | - | ✓ |

---

## 8. Functional Requirements

### 8.1 User Registration
- FR-001: System shall allow new users to create accounts with email, full name, and password
- FR-002: System shall validate email format and password strength
- FR-003: System shall require password confirmation during registration
- FR-004: System shall require acceptance of terms and privacy policy
- FR-005: System shall prevent duplicate email registration

### 8.2 User Authentication
- FR-006: System shall authenticate users with email and password
- FR-007: System shall maintain secure session after login
- FR-008: System shall redirect users to dashboard after successful login
- FR-009: System shall redirect admins to admin panel after successful login
- FR-010: System shall provide logout functionality
- FR-011: System shall provide forgot password UI
- FR-012: System shall provide reset password UI

### 8.3 Equation Conversion
- FR-013: System shall accept second-order plane curve equations as input
- FR-014: System shall validate equation format before conversion
- FR-015: System shall convert equations using complex variable substitution formulas
- FR-016: System shall display original equation, substitution formulas, step-by-step transformation, and final result
- FR-017: System shall provide example equations for Circle, Ellipse, Parabola, Hyperbola
- FR-018: System shall allow users to copy conversion results
- FR-019: System shall allow users to save conversion results to history
- FR-020: System shall provide clear button to reset converter input

### 8.4 Conversion History
- FR-021: System shall store each saved conversion with user ID, original equation, transformed result, and timestamp
- FR-022: System shall display user's conversion history in chronological order
- FR-023: System shall allow users to view only their own conversion history
- FR-024: System shall display recent conversions on user dashboard

### 8.5 User Dashboard
- FR-025: System shall display welcome message with user's name
- FR-026: System shall show quick statistics (total conversions, recent activity)
- FR-027: System shall provide quick access button to converter
- FR-028: System shall display recent conversions preview
- FR-029: System shall provide navigation to converter, history, and profile pages

### 8.6 User Profile
- FR-030: System shall allow users to view their profile information
- FR-031: System shall allow users to edit their name and email
- FR-032: System shall allow users to change password
- FR-033: System shall display user's account role
- FR-034: System shall provide dark mode toggle
- FR-035: System shall provide language switcher

### 8.7 Admin Panel
- FR-036: System shall restrict admin panel access to admin role only
- FR-037: System shall display overview dashboard with total users, total conversions, and active users
- FR-038: System shall display list of all registered users
- FR-039: System shall allow admin to search users by name or email
- FR-040: System shall allow admin to filter users by role or status
- FR-041: System shall display user details including registration date, role, and activity count
- FR-042: System shall provide UI to deactivate/block users
- FR-043: System shall provide UI to delete users
- FR-044: System shall provide UI to edit user roles
- FR-045: System shall display conversion history across all users
- FR-046: System shall allow admin to filter conversions by user or date
- FR-047: System shall display most used equation examples
- FR-048: System shall display recent platform activity log

### 8.8 Multilingual Support
- FR-049: System shall support Uzbek, Russian, and English languages
- FR-050: System shall default to Uzbek language
- FR-051: System shall allow users to switch language from any page
- FR-052: System shall persist language preference across sessions

---

## 9. Non-Functional Requirements

### 9.1 Performance
- NFR-001: Equation conversion shall complete within 2 seconds
- NFR-002: Page load time shall not exceed 3 seconds on standard broadband
- NFR-003: System shall support at least 100 concurrent users
- NFR-004: Database queries shall execute within 500ms

### 9.2 Security
- NFR-005: Passwords shall be hashed using bcrypt with minimum 10 salt rounds
- NFR-006: User sessions shall expire after 24 hours of inactivity
- NFR-007: Admin routes shall be protected with role-based middleware
- NFR-008: All form inputs shall be validated and sanitized
- NFR-009: Authentication endpoints shall implement rate limiting (5 attempts per 15 minutes)
- NFR-010: System shall log all admin actions for audit trail

### 9.3 Usability
- NFR-011: Interface shall be fully responsive on mobile, tablet, and desktop
- NFR-012: System shall provide clear error messages for invalid inputs
- NFR-013: System shall display loading states for asynchronous operations
- NFR-014: System shall provide empty states when no data is available
- NFR-015: Navigation shall be intuitive with maximum 3 clicks to any feature

### 9.4 Reliability
- NFR-016: System uptime shall be at least 99%
- NFR-017: System shall handle invalid equation inputs without crashing
- NFR-018: System shall gracefully handle database connection failures

### 9.5 Maintainability
- NFR-019: Code shall follow consistent style guidelines
- NFR-020: System shall use component-based architecture
- NFR-021: Database schema shall support easy migration and versioning

---

## 10. System Architecture

### 10.1 Architecture Pattern
**Three-tier architecture:**
- **Presentation Layer:** React-based frontend with responsive UI
- **Application Layer:** Node.js backend with RESTful API
- **Data Layer:** PostgreSQL relational database

### 10.2 Architecture Diagram (Conceptual)
```
┌─────────────────────────────────────────┐
│         Client Browser                  │
│  (React + Tailwind CSS + Shadcn)       │
└──────────────┬──────────────────────────┘
               │ HTTPS
               ▼
┌─────────────────────────────────────────┐
│         API Gateway / Load Balancer     │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      Application Server                 │
│      (Node.js + Express)                │
│  ┌─────────────────────────────────┐   │
│  │  Authentication Service         │   │
│  │  Conversion Engine Service      │   │
│  │  User Management Service        │   │
│  │  Admin Service                  │   │
│  └─────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│      Database Server                    │
│      (PostgreSQL)                       │
│  ┌─────────────────────────────────┐   │
│  │  Users Table                    │   │
│  │  ConversionHistory Table        │   │
│  │  SystemActivity Table           │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 11. Recommended Tech Stack

### 11.1 Frontend
- **Framework:** React 18+
- **Styling:** Tailwind CSS + Shadcn UI components
- **State Management:** React Context API or Zustand
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Internationalization:** react-i18next
- **Math Rendering:** KaTeX or MathJax (optional)
- **Notifications:** React Hot Toast

### 11.2 Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Language:** TypeScript
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt
- **Validation:** Zod
- **ORM:** Prisma
- **API Documentation:** Swagger/OpenAPI (optional)

### 11.3 Database
- **Database:** PostgreSQL 14+
- **Migration Tool:** Prisma Migrate

### 11.4 DevOps & Deployment
- **Version Control:** Git + GitHub
- **Container:** Docker
- **Hosting:** Vercel (frontend) + Railway/Render (backend)
- **Environment Management:** dotenv

### 11.5 Testing
- **Unit Testing:** Jest
- **Integration Testing:** Supertest
- **E2E Testing:** Playwright (optional)

---

## 12. Frontend Architecture

### 12.1 Component Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   └── Toast.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── ForgotPasswordForm.tsx
│   │   └── ResetPasswordForm.tsx
│   ├── converter/
│   │   ├── EquationInput.tsx
│   │   ├── ExampleButtons.tsx
│   │   ├── ConversionResult.tsx
│   │   ├── StepByStep.tsx
│   │   └── GraphVisualization.tsx
│   ├── dashboard/
│   │   ├── WelcomeCard.tsx
│   │   ├── StatsCard.tsx
│   │   ├── RecentConversions.tsx
│   │   └── QuickActions.tsx
│   ├── history/
│   │   ├── HistoryList.tsx
│   │   └── HistoryItem.tsx
│   ├── profile/
│   │   ├── ProfileInfo.tsx
│   │   ├── EditProfileForm.tsx
│   │   └── ChangePasswordForm.tsx
│   └── admin/
│       ├── UserTable.tsx
│       ├── UserRow.tsx
│       ├── ActivityLog.tsx
│       ├── StatsOverview.tsx
│       └── SearchFilter.tsx
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── user/
│   │   ├── DashboardPage.tsx
│   │   ├── ConverterPage.tsx
│   │   ├── HistoryPage.tsx
│   │   └── ProfilePage.tsx
│   └── admin/
│       ├── AdminDashboardPage.tsx
│       ├── UsersPage.tsx
│       ├── ActivityPage.tsx
│       └── SettingsPage.tsx
├── contexts/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useConverter.ts
│   ├── useHistory.ts
│   └── useAdmin.ts
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── converterService.ts
│   ├── historyService.ts
│   └── adminService.ts
├── utils/
│   ├── validation.ts
│   ├── formatters.ts
│   └── constants.ts
├── types/
│   ├── user.ts
│   ├── conversion.ts
│   └── api.ts
├── i18n/
│   ├── uz.json
│   ├── ru.json
│   └── en.json
└── App.tsx
```

### 12.2 Routing Structure
```typescript
// Public routes
/                    → LandingPage
/login               → LoginPage
/register            → RegisterPage
/forgot-password     → ForgotPasswordPage

// Protected user routes
/dashboard           → DashboardPage
/dashboard/converter → ConverterPage
/dashboard/history   → HistoryPage
/dashboard/profile   → ProfilePage

// Protected admin routes
/admin               → AdminDashboardPage
/admin/users         → UsersPage
/admin/activity      → ActivityPage
/admin/settings      → SettingsPage
```

---

## 13. Backend Architecture

### 13.1 Project Structure
```
backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── converterController.ts
│   │   ├── historyController.ts
│   │   ├── userController.ts
│   │   └── adminController.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   ├── roleMiddleware.ts
│   │   ├── validationMiddleware.ts
│   │   ├── errorHandler.ts
│   │   └── rateLimiter.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── converterRoutes.ts
│   │   ├── historyRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── adminRoutes.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── conversionEngine.ts
│   │   ├── historyService.ts
│   │   ├── userService.ts
│   │   └── adminService.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── bcrypt.ts
│   │   ├── validators.ts
│   │   └── logger.ts
│   ├── types/
│   │   ├── express.d.ts
│   │   └── models.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── config/
│   │   ├── database.ts
│   │   └── environment.ts
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 14. Authentication and Authorization Flow

### 14.1 Registration Flow
1. User submits registration form (email, fullName, password, confirmPassword)
2. Frontend validates input (email format, password strength, password match)
3. Backend receives request at POST /api/auth/register
4. Backend validates input again
5. Backend checks if email already exists
6. Backend hashes password using bcrypt
7. Backend creates user record with role='user' and isActive=true
8. Backend returns success response
9. Frontend redirects to login page

### 14.2 Login Flow
1. User submits login form (email, password)
2. Frontend validates input
3. Backend receives request at POST /api/auth/login
4. Backend finds user by email
5. Backend compares password hash using bcrypt
6. Backend checks if user isActive
7. Backend generates JWT token with userId and role
8. Backend returns token and user data
9. Frontend stores token in localStorage/sessionStorage
10. Frontend redirects based on role:
    - User → /dashboard
    - Admin → /admin

### 14.3 Protected Route Access
1. User attempts to access protected route
2. Frontend checks if token exists
3. Frontend includes token in Authorization header
4. Backend middleware verifies JWT token
5. Backend middleware extracts userId and role from token
6. Backend middleware checks route permissions
7. If authorized, request proceeds to controller
8. If unauthorized, backend returns 401/403 error

### 14.4 Logout Flow
1. User clicks logout button
2. Frontend removes token from storage
3. Frontend redirects to landing page
4. (Optional) Backend can maintain token blacklist

---

## 15. Database Design

### 15.1 Prisma Schema
```prisma
generator client {
  provider = \"prisma-client-js\"
}

datasource db {
  provider = \"postgresql\"
  url      = env(\"DATABASE_URL\")
}

model User {
  id                String              @id @default(uuid())
  email             String              @unique
  fullName          String
  username          String?             @unique
  passwordHash      String
  role              Role                @default(USER)
  isActive          Boolean             @default(true)
  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt
  conversions       ConversionHistory[]
  activities        SystemActivity[]

  @@map(\"users\")
}

model ConversionHistory {
  id                  String   @id @default(uuid())
  userId              String
  user                User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  originalEquation    String
  transformedEquation String
  steps               String   @db.Text
  createdAt           DateTime @default(now())

  @@map(\"conversion_history\")
  @@index([userId])
  @@index([createdAt])
}

model SystemActivity {
  id          String   @id @default(uuid())
  userId      String?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  actionType  String
  description String
  createdAt   DateTime @default(now())

  @@map(\"system_activity\")
  @@index([userId])
  @@index([createdAt])
}

enum Role {
  USER
  ADMIN
}
```

### 15.2 Entity Relationships
- **User** (1) → (N) **ConversionHistory**: One user can have many conversion records
- **User** (1) → (N) **SystemActivity**: One user can have many activity logs
- **ConversionHistory** belongs to one **User**
- **SystemActivity** optionally belongs to one **User** (nullable for system-level actions)

### 15.3 Database Indexes
- `users.email` (unique index for fast login lookup)
- `users.username` (unique index if username is used)
- `conversion_history.userId` (index for user history queries)
- `conversion_history.createdAt` (index for chronological sorting)
- `system_activity.userId` (index for user activity filtering)
- `system_activity.createdAt` (index for recent activity queries)

---

## 16. API Design Overview

### 16.1 API Base URL
```
Development: http://localhost:5000/api
Production: https://api.complexcurve.com/api
```

### 16.2 Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

### 16.3 Response Format
**Success Response:**
```json
{
  \"success\": true,
  \"data\": { ... },
  \"message\": \"Operation successful\"
}
```

**Error Response:**
```json
{
  \"success\": false,
  \"error\": \"Error message\",
  \"code\": \"ERROR_CODE\"
}
```

---

## 17. Suggested REST API Endpoints

### 17.1 Authentication Endpoints

#### POST /api/auth/register
**Description:** Register new user account

**Request Body:**
```json
{
  \"email\": \"user@example.com\",
  \"fullName\": \"John Doe\",
  \"password\": \"SecurePass123!\",
  \"confirmPassword\": \"SecurePass123!\",
  \"acceptTerms\": true
}
```

**Response (201):**
```json
{
  \"success\": true,
  \"message\": \"Registration successful\"
}
```

#### POST /api/auth/login
**Description:** Authenticate user and return JWT token

**Request Body:**
```json
{
  \"email\": \"user@example.com\",
  \"password\": \"SecurePass123!\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",
    \"user\": {
      \"id\": \"uuid\",
      \"email\": \"user@example.com\",
      \"fullName\": \"John Doe\",
      \"role\": \"USER\"
    }
  }
}
```

#### POST /api/auth/logout
**Description:** Logout user (optional token blacklist)

**Headers:** Authorization: Bearer <token>

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"Logout successful\"
}
```

#### POST /api/auth/forgot-password
**Description:** Request password reset (sends reset link to email)

**Request Body:**
```json
{
  \"email\": \"user@example.com\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"Password reset link sent to email\"
}
```

#### POST /api/auth/reset-password
**Description:** Reset password with token

**Request Body:**
```json
{
  \"token\": \"reset-token\",
  \"newPassword\": \"NewSecurePass123!\",
  \"confirmPassword\": \"NewSecurePass123!\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"Password reset successful\"
}
```

### 17.2 Converter Endpoints

#### POST /api/converter/transform
**Description:** Convert equation from Cartesian to complex form

**Headers:** Authorization: Bearer <token>

**Request Body:**
```json
{
  \"equation\": \"x^2 + y^2 - 1 = 0\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"originalEquation\": \"x^2 + y^2 - 1 = 0\",
    \"substitutionFormulas\": [
      \"x = (z + z̄) / 2\",
      \"y = (z - z̄) / (2i)\"
    ],
    \"steps\": [
      \"Step 1: Substitute x = (z + z̄) / 2\",
      \"Step 2: Substitute y = (z - z̄) / (2i)\",
      \"Step 3: Expand and simplify\",
      \"Step 4: Combine like terms\"
    ],
    \"transformedEquation\": \"zz̄ - 1 = 0\"
  }
}
```

### 17.3 History Endpoints

#### GET /api/history
**Description:** Get user's conversion history

**Headers:** Authorization: Bearer <token>

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"conversions\": [
      {
        \"id\": \"uuid\",
        \"originalEquation\": \"x^2 + y^2 - 1 = 0\",
        \"transformedEquation\": \"zz̄ - 1 = 0\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 5,
      \"totalItems\": 47
    }
  }
}
```

#### POST /api/history
**Description:** Save conversion to history

**Headers:** Authorization: Bearer <token>

**Request Body:**
```json
{
  \"originalEquation\": \"x^2 + y^2 - 1 = 0\",
  \"transformedEquation\": \"zz̄ - 1 = 0\",
  \"steps\": \"Step 1: ..., Step 2: ...\"
}
```

**Response (201):**
```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"createdAt\": \"2026-03-11T10:30:00Z\"
  }
}
```

#### DELETE /api/history/:id
**Description:** Delete conversion from history

**Headers:** Authorization: Bearer <token>

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"Conversion deleted\"
}
```

### 17.4 User Endpoints

#### GET /api/user/profile
**Description:** Get current user profile

**Headers:** Authorization: Bearer <token>

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"user@example.com\",
    \"fullName\": \"John Doe\",
    \"role\": \"USER\",
    \"createdAt\": \"2026-01-15T08:00:00Z\"
  }
}
```

#### PUT /api/user/profile
**Description:** Update user profile

**Headers:** Authorization: Bearer <token>

**Request Body:**
```json
{
  \"fullName\": \"John Smith\",
  \"email\": \"newmail@example.com\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"newmail@example.com\",
    \"fullName\": \"John Smith\"
  }
}
```

#### PUT /api/user/change-password
**Description:** Change user password

**Headers:** Authorization: Bearer <token>

**Request Body:**
```json
{
  \"currentPassword\": \"OldPass123!\",
  \"newPassword\": \"NewPass123!\",
  \"confirmPassword\": \"NewPass123!\"
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"Password changed successfully\"
}
```

### 17.5 Admin Endpoints

#### GET /api/admin/stats
**Description:** Get platform statistics

**Headers:** Authorization: Bearer <token> (Admin only)

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"totalUsers\": 1247,
    \"activeUsers\": 892,
    \"totalConversions\": 15634,
    \"conversionsToday\": 234
  }
}
```

#### GET /api/admin/users
**Description:** Get all users with filtering

**Headers:** Authorization: Bearer <token> (Admin only)

**Query Parameters:**
- `search` (optional): Search by name or email
- `role` (optional): Filter by role (USER/ADMIN)
- `isActive` (optional): Filter by active status
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"users\": [
      {
        \"id\": \"uuid\",
        \"email\": \"user@example.com\",
        \"fullName\": \"John Doe\",
        \"role\": \"USER\",
        \"isActive\": true,
        \"createdAt\": \"2026-01-15T08:00:00Z\",
        \"conversionCount\": 23
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 25,
      \"totalItems\": 1247
    }
  }
}
```

#### GET /api/admin/users/:id
**Description:** Get user details

**Headers:** Authorization: Bearer <token> (Admin only)

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"id\": \"uuid\",
    \"email\": \"user@example.com\",
    \"fullName\": \"John Doe\",
    \"role\": \"USER\",
    \"isActive\": true,
    \"createdAt\": \"2026-01-15T08:00:00Z\",
    \"updatedAt\": \"2026-03-10T14:20:00Z\",
    \"conversionCount\": 23,
    \"lastActivity\": \"2026-03-11T09:15:00Z\"
  }
}
```

#### PUT /api/admin/users/:id
**Description:** Update user (role, active status)

**Headers:** Authorization: Bearer <token> (Admin only)

**Request Body:**
```json
{
  \"role\": \"ADMIN\",
  \"isActive\": false
}
```

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"User updated successfully\"
}
```

#### DELETE /api/admin/users/:id
**Description:** Delete user account

**Headers:** Authorization: Bearer <token> (Admin only)

**Response (200):**
```json
{
  \"success\": true,
  \"message\": \"User deleted successfully\"
}
```

#### GET /api/admin/activity
**Description:** Get platform activity log

**Headers:** Authorization: Bearer <token> (Admin only)

**Query Parameters:**
- `userId` (optional): Filter by user
- `actionType` (optional): Filter by action type
- `startDate` (optional): Filter from date
- `endDate` (optional): Filter to date
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"activities\": [
      {
        \"id\": \"uuid\",
        \"userId\": \"uuid\",
        \"userName\": \"John Doe\",
        \"actionType\": \"CONVERSION_SAVED\",
        \"description\": \"Saved conversion: x^2 + y^2 - 1 = 0\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 50,
      \"totalItems\": 2456
    }
  }
}
```

#### GET /api/admin/conversions
**Description:** Get all conversions across users

**Headers:** Authorization: Bearer <token> (Admin only)

**Query Parameters:**
- `userId` (optional): Filter by user
- `startDate` (optional): Filter from date
- `endDate` (optional): Filter to date
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  \"success\": true,
  \"data\": {
    \"conversions\": [
      {
        \"id\": \"uuid\",
        \"userId\": \"uuid\",
        \"userName\": \"John Doe\",
        \"originalEquation\": \"x^2 + y^2 - 1 = 0\",
        \"transformedEquation\": \"zz̄ - 1 = 0\",
        \"createdAt\": \"2026-03-11T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"currentPage\": 1,
      \"totalPages\": 156,
      \"totalItems\": 15634
    }
  }
}
```

---

## 18. Equation Conversion Engine Logic

### 18.1 Mathematical Foundation
The conversion uses complex variable substitution:
- **Complex number:** z = x + iy
- **Complex conjugate:** z̄ = x - iy
- **Inverse formulas:**
  - x = (z + z̄) / 2
  - y = (z - z̄) / (2i)

### 18.2 Conversion Algorithm
```
1. Parse input equation
2. Validate equation format (second-order polynomial in x and y)
3. Extract coefficients for x^2, y^2, xy, x, y, and constant terms
4. Apply substitution formulas:
   - Replace x with (z + z̄) / 2
   - Replace y with (z - z̄) / (2i)
5. Expand algebraic expressions
6. Simplify using complex number properties:
   - z * z̄ = |z|^2
   - z + z̄ = 2 * Re(z)
   - z - z̄ = 2i * Im(z)
7. Combine like terms
8. Format final equation in complex form
9. Generate step-by-step explanation
```

### 18.3 Supported Equation Types

**Circle:** x² + y² = r²
- Substitution: ((z + z̄)/2)² + ((z - z̄)/(2i))² = r²
- Simplified: zz̄ = r²

**Ellipse:** x²/a² + y²/b² = 1
- Substitution: ((z + z̄)/2)²/a² + ((z - z̄)/(2i))²/b² = 1
- Simplified: (b²(z + z̄)² + a²(z - z̄)²) / (4a²b²) = 1

**Parabola:** y = ax²
- Substitution: (z - z̄)/(2i) = a((z + z̄)/2)²
- Simplified: (z - z̄) = ai(z + z̄)²

**Hyperbola:** x²/a² - y²/b² = 1
- Substitution: ((z + z̄)/2)²/a² - ((z - z̄)/(2i))²/b² = 1
- Simplified: (b²(z + z̄)² - a²(z - z̄)²) / (4a²b²) = 1

### 18.4 Implementation Approach
- Use symbolic math library (e.g., mathjs, algebra.js) for parsing and simplification
- Implement custom parser for equation input
- Store intermediate steps for display
- Handle edge cases (division by zero, invalid format)

---

## 19. Input Validation Rules

### 19.1 Registration Validation
- **Email:**
  - Required
  - Valid email format (regex: `/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`)
  - Maximum 255 characters
  - Must be unique
- **Full Name:**
  - Required
  - Minimum 2 characters
  - Maximum 100 characters
  - Only letters, spaces, hyphens, apostrophes
- **Password:**
  - Required
  - Minimum 8 characters
  - Must contain: uppercase, lowercase, number, special character
  - Maximum 128 characters
- **Confirm Password:**
  - Required
  - Must match password
- **Accept Terms:**
  - Required
  - Must be true

### 19.2 Login Validation
- **Email:**
  - Required
  - Valid email format
- **Password:**
  - Required
  - Minimum 8 characters

### 19.3 Equation Input Validation
- **Format:**
  - Must contain '=' sign
  - Must be second-order polynomial (max degree 2)
  - Only allowed variables: x, y
  - Allowed operators: +, -, *, /, ^, ()
  - No division by variables
- **Length:**
  - Minimum 5 characters
  - Maximum 500 characters
- **Examples of valid input:**
  - `x^2 + y^2 - 1 = 0`
  - `x^2/4 + y^2/9 - 1 = 0`
  - `y - x^2 = 0`
- **Examples of invalid input:**
  - `x^3 + y = 0` (degree > 2)
  - `x + y` (no equals sign)
  - `sin(x) + y = 0` (unsupported function)

### 19.4 Profile Update Validation
- **Full Name:** Same as registration
- **Email:** Same as registration (must check uniqueness excluding current user)

### 19.5 Password Change Validation
- **Current Password:** Required
- **New Password:** Same rules as registration password
- **Confirm Password:** Must match new password

---

## 20. Error Handling Strategy

### 20.1 Error Categories

**Validation Errors (400):**
- Invalid input format
- Missing required fields
- Password mismatch
- Email already exists

**Authentication Errors (401):**
- Invalid credentials
- Token expired
- Token missing

**Authorization Errors (403):**
- Insufficient permissions
- Admin-only route accessed by user

**Not Found Errors (404):**
- User not found
- Conversion not found
- Route not found

**Server Errors (500):**
- Database connection failure
- Unexpected errors
- Conversion engine failure

### 20.2 Error Response Format
```json
{
  \"success\": false,
  \"error\": \"Human-readable error message\",
  \"code\": \"ERROR_CODE\",
  \"details\": {
    \"field\": \"email\",
    \"message\": \"Email already exists\"
  }
}
```

### 20.3 Frontend Error Handling
- Display toast notifications for errors
- Show inline validation errors on forms
- Provide retry buttons for failed operations
- Log errors to console in development
- Graceful degradation for non-critical features

### 20.4 Backend Error Handling
- Use try-catch blocks in all async functions
- Log errors with timestamp and context
- Return consistent error format
- Never expose sensitive information in error messages
- Use error handling middleware

---

## 21. UI/UX Requirements

### 21.1 Design System

**Color Palette:**
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)
- Background: White (#FFFFFF)
- Surface: Light Gray (#F9FAFB)
- Text Primary: Dark Gray (#111827)
- Text Secondary: Medium Gray (#6B7280)

**Typography:**
- Font Family: Inter, system-ui, sans-serif
- Headings: Bold, 24-48px
- Body: Regular, 14-16px
- Small: Regular, 12-14px

**Spacing:**
- Base unit: 4px
- Common spacing: 8px, 16px, 24px, 32px, 48px

**Border Radius:**
- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px

**Shadows:**
- Small: 0 1px 2px rgba(0,0,0,0.05)
- Medium: 0 4px 6px rgba(0,0,0,0.1)
- Large: 0 10px 15px rgba(0,0,0,0.1)

### 21.2 Component Guidelines

**Buttons:**
- Primary: Blue background, white text, medium shadow
- Secondary: White background, blue border, blue text
- Danger: Red background, white text
- Disabled: Gray background, gray text, no hover
- Hover: Slightly darker shade, scale 1.02
- Active: Pressed state with scale 0.98

**Input Fields:**
- Border: 1px solid gray
- Focus: Blue border, blue shadow
- Error: Red border, red text below
- Disabled: Gray background, gray text
- Placeholder: Light gray text

**Cards:**
- White background
- Medium border radius
- Medium shadow
- Padding: 24px
- Hover: Slight shadow increase

**Tables:**
- Striped rows (alternating background)
- Hover: Light blue background
- Header: Bold text, bottom border
- Responsive: Horizontal scroll on mobile

### 21.3 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 21.4 Loading States
- Skeleton loaders for content
- Spinner for buttons and actions
- Progress bar for multi-step processes
- Disable interactive elements during loading

### 21.5 Empty States
- Friendly illustration or icon
- Clear message explaining why empty
- Call-to-action button to add content
- Example: \"No conversions yet. Start by converting your first equation!\"

### 21.6 Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Alt text for images
- Screen reader friendly

---

## 22. Page-by-Page Breakdown

### 22.1 Landing Page (/)

**Hero Section:**
- Large heading: \"ComplexCurve Converter\"
- Subtitle in Uzbek: \"Tekislikdagi egri chiziqlar tenglamalarini kompleks shaklga o'tkazuvchi aqlli platforma\"
- Three CTA buttons: \"Boshlash\", \"Nazariyani ko'rish\", \"Kirish\"
- Background: Gradient blue to purple
- Illustration: Mathematical curves or abstract shapes

**Features Section:**
- Grid of 4-6 feature cards
- Each card: Icon, title, short description
- Features: Equation conversion, Step-by-step explanation, History saving, Admin tools, Multilingual

**Theory Section:**
- Educational content about complex numbers
- Formulas displayed with proper math rendering
- Explanation cards with examples
- Visual diagrams (optional)

**Examples Section:**
- 4 cards for Circle, Ellipse, Parabola, Hyperbola
- Each card: Equation, description, \"Try Example\" button
- Hover effect: Card lift with shadow

**About Section:**
- Project description
- Educational purpose statement
- University project context
- Team information (optional)

**Footer:**
- Navigation links
- Contact information
- Social media links (optional)
- Copyright notice

### 22.2 Login Page (/login)

**Layout:**
- Centered card on gradient background
- Logo at top
- Heading: \"Kirish\" (Login)

**Form Fields:**
- Email input
- Password input with show/hide toggle
- \"Remember me\" checkbox (optional)
- \"Forgot password?\" link
- Login button
- \"Don't have an account? Register\" link

**Validation:**
- Real-time validation on blur
- Error messages below fields
- Disabled submit until valid

### 22.3 Register Page (/register)

**Layout:**
- Similar to login page
- Heading: \"Ro'yxatdan o'tish\" (Register)

**Form Fields:**
- Full name input
- Email input
- Password input with strength indicator
- Confirm password input
- Terms and privacy checkbox
- Register button
- \"Already have an account? Login\" link

**Validation:**
- Real-time validation
- Password strength meter
- Match confirmation for passwords

### 22.4 Forgot Password Page (/forgot-password)

**Layout:**
- Centered card
- Heading: \"Parolni tiklash\" (Reset Password)
- Instruction text

**Form:**
- Email input
- Submit button
- Back to login link

**Success State:**
- Confirmation message
- \"Check your email\" instruction

### 22.5 User Dashboard (/dashboard)

**Layout:**
- Sidebar navigation (collapsible on mobile)
- Top navbar with user menu and language switcher
- Main content area

**Content:**
- Welcome card: \"Xush kelibsiz, [Name]!\"
- Stats cards: Total conversions, Recent activity, Saved equations
- Recent conversions list (5 most recent)
- Quick action button: \"Yangi konvertatsiya\" (New Conversion)
- Activity timeline (optional)

**Sidebar:**
- Dashboard (active)
- Converter
- History
- Profile
- Logout

### 22.6 Converter Page (/dashboard/converter)

**Layout:**
- Two-column layout (input left, output right)
- Responsive: Stack on mobile

**Input Section:**
- Large textarea for equation
- Example buttons below (Circle, Ellipse, Parabola, Hyperbola)
- Convert button (primary, large)
- Clear button (secondary)

**Output Section:**
- Original equation display
- Substitution formulas
- Step-by-step cards (expandable)
- Final result (highlighted)
- Copy button
- Save button
- Graph visualization area (optional)

**States:**
- Empty: Instruction text and examples
- Loading: Spinner during conversion
- Success: Display results
- Error: Friendly error message with retry

### 22.7 History Page (/dashboard/history)

**Layout:**
- List or table view toggle
- Search bar
- Date filter

**Content:**
- List of saved conversions
- Each item: Original equation, date, view/delete buttons
- Pagination
- Empty state: \"No saved conversions yet\"

**Actions:**
- Click to view full conversion details
- Delete with confirmation modal
- Export (optional)

### 22.8 Profile Page (/dashboard/profile)

**Layout:**
- Tabbed interface or sections

**Sections:**
1. **Profile Information:**
   - Display: Name, email, role, registration date
   - Edit button → Edit mode with save/cancel

2. **Change Password:**
   - Current password input
   - New password input
   - Confirm password input
   - Change password button

3. **Preferences:**
   - Dark mode toggle
   - Language selector

4. **Account Actions:**
   - Logout button
   - Delete account button (with confirmation)

### 22.9 Admin Dashboard (/admin)

**Layout:**
- Admin sidebar navigation
- Top navbar with admin badge
- Dashboard grid

**Content:**
- Stats cards: Total users, Active users, Total conversions, Today's activity
- Charts: User growth, Conversion trends (optional)
- Recent activity feed
- Quick actions: View users, View activity

**Sidebar:**
- Admin Dashboard (active)
- Users
- Activity
- Settings
- Logout

### 22.10 Users Management Page (/admin/users)

**Layout:**
- Search bar at top
- Filters: Role, Active status
- User table

**Table Columns:**
- Avatar/Initial
- Full Name
- Email
- Role
- Status (Active/Inactive)
- Registration Date
- Conversions Count
- Actions (View, Edit, Delete)

**Actions:**
- Click row to view user details
- Edit button → Modal with role and status fields
- Delete button → Confirmation modal
- Bulk actions (optional): Select multiple, deactivate/delete

**Pagination:**
- Items per page selector
- Page navigation

### 22.11 Activity Monitoring Page (/admin/activity)

**Layout:**
- Filters: User, Action type, Date range
- Activity table or timeline

**Table Columns:**
- Timestamp
- User
- Action Type
- Description
- Details (expandable)

**Action Types:**
- USER_REGISTERED
- USER_LOGGED_IN
- CONVERSION_SAVED
- PROFILE_UPDATED
- USER_DELETED (by admin)
- etc.

**Export:**
- Export to CSV button (optional)

### 22.12 Admin Settings Page (/admin/settings)

**Content:**
- Admin profile information
- System preferences (optional)
- Platform settings (optional)
- Backup/restore options (optional)

---

## 23. Admin Panel Breakdown

### 23.1 Admin Access Control
- Only users with role='ADMIN' can access /admin routes
- Middleware checks JWT token and role
- Redirect to /dashboard if user is not admin
- Admin badge displayed in navbar

### 23.2 Admin Capabilities
- View all registered users
- Search and filter users
- View user details and activity
- Edit user role (promote to admin, demote to user)
- Deactivate/activate user accounts
- Delete user accounts
- View all conversion history across platform
- Filter conversions by user or date
- View platform statistics and trends
- Monitor recent activity log
- Access system settings

### 23.3 Admin Activity Logging
All admin actions should be logged:
- USER_ROLE_CHANGED: \"Admin [name] changed user [name]'s role from USER to ADMIN\"
- USER_DEACTIVATED: \"Admin [name] deactivated user [name]\"
- USER_DELETED: \"Admin [name] deleted user [name]\"
- USER_ACTIVATED: \"Admin [name] activated user [name]\"

---

## 24. Conversion History Logic

### 24.1 Saving Conversions
- User clicks \"Save\" button after conversion
- Frontend sends POST request to /api/history
- Backend creates ConversionHistory record with userId
- Success toast: \"Conversion saved to history\"

### 24.2 Viewing History
- User navigates to /dashboard/history
- Frontend fetches GET /api/history
- Display conversions in chronological order (newest first)
- Pagination for large history

### 24.3 Deleting History
- User clicks delete button on history item
- Confirmation modal: \"Are you sure you want to delete this conversion?\"
- Frontend sends DELETE /api/history/:id
- Backend verifies ownership (userId matches)
- Remove from list with animation
- Success toast: \"Conversion deleted\"

### 24.4 History Privacy
- Users can only view their own history
- Backend filters by userId from JWT token
- Admins can view all history via /api/admin/conversions

---

## 25. Security Requirements

### 25.1 Password Security
- Hash passwords using bcrypt with salt rounds = 10
- Never store plain text passwords
- Never return password hash in API responses
- Enforce strong password policy (8+ chars, mixed case, numbers, symbols)

### 25.2 Authentication Security
- Use JWT tokens with expiration (24 hours)
- Store tokens securely (httpOnly cookies or secure localStorage)
- Implement token refresh mechanism (optional)
- Logout should invalidate token (blacklist or short expiration)

### 25.3 Authorization Security
- Verify JWT token on all protected routes
- Check user role for admin routes
- Never trust client-side role checks
- Implement middleware for role-based access control

### 25.4 Input Validation
- Validate all inputs on both frontend and backend
- Sanitize inputs to prevent XSS attacks
- Use parameterized queries to prevent SQL injection
- Limit input length to prevent DoS

### 25.5 Rate Limiting
- Implement rate limiting on authentication endpoints:
  - Login: 5 attempts per 15 minutes per IP
  - Register: 3 attempts per hour per IP
  - Password reset: 3 attempts per hour per email
- Return 429 Too Many Requests when limit exceeded

### 25.6 HTTPS
- Use HTTPS in production
- Redirect HTTP to HTTPS
- Set secure flag on cookies

### 25.7 CORS
- Configure CORS to allow only trusted origins
- In development: Allow localhost
- In production: Allow only production domain

### 25.8 Error Messages
- Never expose sensitive information in error messages
- Use generic messages for authentication failures
- Example: \"Invalid credentials\" instead of \"Email not found\"

### 25.9 Session Management
- Implement session timeout (24 hours)
- Provide logout functionality
- Clear session data on logout

### 25.10 Admin Action Logging
- Log all admin actions with timestamp and admin ID
- Store logs in SystemActivity table
- Provide audit trail for security review

---

## 26. Performance Requirements

### 26.1 Response Time
- API endpoints: < 500ms (95th percentile)
- Equation conversion: < 2 seconds
- Page load: < 3 seconds on 3G connection
- Database queries: < 200ms

### 26.2 Scalability
- Support 100 concurrent users initially
- Design for horizontal scaling
- Use connection pooling for database
- Implement caching for static content

### 26.3 Database Optimization
- Index frequently queried fields (email, userId, createdAt)
- Use pagination for large result sets
- Optimize queries with EXPLAIN ANALYZE
- Implement database connection pooling

### 26.4 Frontend Optimization
- Code splitting for routes
- Lazy loading for images
- Minify and compress assets
- Use CDN for static assets (optional)
- Implement service worker for offline support (optional)

### 26.5 Caching Strategy
- Cache static assets (CSS, JS, images)
- Cache API responses where appropriate (user profile, stats)
- Use ETags for conditional requests
- Implement browser caching headers

---

## 27. Logging and Audit Trail

### 27.1 Application Logging
- Log levels: ERROR, WARN, INFO, DEBUG
- Log format: Timestamp, level, message, context
- Log to console in development
- Log to file or service in production (e.g., Winston, Pino)

### 27.2 Error Logging
- Log all server errors with stack trace
- Log authentication failures
- Log validation errors
- Include request context (user ID, endpoint, method)

### 27.3 Activity Logging
- Log user actions:
  - Registration
  - Login/Logout
  - Conversion saved
  - Profile updated
  - Password changed
- Log admin actions:
  - User role changed
  - User deactivated/deleted
  - Settings changed

### 27.4 Audit Trail
- Store activity logs in SystemActivity table
- Include: userId, actionType, description, timestamp
- Provide admin interface to view audit trail
- Filter by user, action type, date range
- Export audit logs (optional)

---

## 28. Deployment Plan

### 28.1 Development Environment
- Local development with hot reload
- Use environment variables for configuration
- Docker Compose for local database (optional)

### 28.2 Staging Environment
- Deploy to staging server before production
- Test all features in staging
- Use staging database (separate from production)

### 28.3 Production Environment
- Deploy frontend to Vercel or Netlify
- Deploy backend to Railway, Render, or AWS
- Use managed PostgreSQL (e.g., Supabase, Railway, AWS RDS)
- Configure environment variables
- Set up SSL certificates
- Configure domain and DNS

### 28.4 CI/CD Pipeline
- Use GitHub Actions or GitLab CI
- Automated testing on push
- Automated deployment to staging on merge to develop
- Manual approval for production deployment

### 28.5 Monitoring
- Set up application monitoring (e.g., Sentry for error tracking)
- Monitor server health (CPU, memory, disk)
- Set up uptime monitoring (e.g., UptimeRobot)
- Configure alerts for critical errors

### 28.6 Backup Strategy
- Daily automated database backups
- Store backups in secure location (S3, Google Cloud Storage)
- Test backup restoration regularly
- Retention policy: Keep daily backups for 30 days

---

## 29. Environment Variables

### 29.1 Backend Environment Variables
```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/complexcurve

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Email (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=noreply@complexcurve.com
```

### 29.2 Frontend Environment Variables
```env
# API
REACT_APP_API_URL=http://localhost:5000/api

# Environment
REACT_APP_ENV=development
```

---

## 30. Folder Structure

### 30.1 Frontend Structure
```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── converter/
│   │   ├── dashboard/
│   │   ├── history/
│   │   ├── profile/
│   │   └── admin/
│   ├── pages/
│   │   ├── public/
│   │   ├── user/
│   │   └── admin/
│   ├── contexts/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── i18n/
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

### 30.2 Backend Structure
```
backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── config/
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

## 31. Testing Strategy

### 31.1 Unit Testing
- Test individual functions and components
- Test conversion engine logic
- Test validation functions
- Test utility functions
- Coverage target: 70%+

### 31.2 Integration Testing
- Test API endpoints
- Test authentication flow
- Test database operations
- Test middleware

### 31.3 E2E Testing (Optional)
- Test complete user flows
- Test registration → login → conversion → save → logout
- Test admin user management flow
- Use Playwright or Cypress

### 31.4 Manual Testing
- Test on different browsers (Chrome, Firefox, Safari)
- Test on different devices (mobile, tablet, desktop)
- Test all user roles (guest, user, admin)
- Test error scenarios
- Test edge cases

---

## 32. Acceptance Criteria

### 32.1 Authentication
- [ ] User can register with valid email and password
- [ ] User cannot register with existing email
- [ ] User can login with correct credentials
- [ ] User cannot login with incorrect credentials
- [ ] User is redirected to dashboard after login
- [ ] Admin is redirected to admin panel after login
- [ ] User can logout successfully
- [ ] User can request password reset
- [ ] User can reset password with valid token

### 32.2 Equation Conversion
- [ ] User can input equation in converter
- [ ] User can select example equations
- [ ] System validates equation format
- [ ] System displays error for invalid equations
- [ ] System converts equation correctly
- [ ] System displays step-by-step transformation
- [ ] User can copy conversion result
- [ ] User can save conversion to history
- [ ] User can clear converter input

### 32.3 User Dashboard
- [ ] Dashboard displays welcome message with user name
- [ ] Dashboard shows conversion statistics
- [ ] Dashboard displays recent conversions
- [ ] User can navigate to converter from dashboard
- [ ] User can navigate to history from dashboard
- [ ] User can navigate to profile from dashboard

### 32.4 Conversion History
- [ ] User can view their conversion history
- [ ] History displays conversions in chronological order
- [ ] User can search history
- [ ] User can filter history by date
- [ ] User can delete conversion from history
- [ ] User cannot view other users' history

### 32.5 User Profile
- [ ] User can view profile information
- [ ] User can edit name and email
- [ ] User can change password
- [ ] User can toggle dark mode
- [ ] User can switch language
- [ ] Profile changes are saved successfully

### 32.6 Admin Panel
- [ ] Admin can access admin panel
- [ ] Non-admin cannot access admin panel
- [ ] Admin dashboard displays platform statistics
- [ ] Admin can view all users
- [ ] Admin can search users
- [ ] Admin can filter users by role/status
- [ ] Admin can view user details
- [ ] Admin can edit user role
- [ ] Admin can deactivate user
- [ ] Admin can delete user
- [ ] Admin can view all conversions
- [ ] Admin can filter conversions by user/date
- [ ] Admin can view activity log

### 32.7 Multilingual Support
- [ ] Platform defaults to Uzbek language
- [ ] User can switch to Russian
- [ ] User can switch to English
- [ ] Language preference persists across sessions
- [ ] All UI text is translated correctly

### 32.8 Responsive Design
- [ ] Application works on mobile devices
- [ ] Application works on tablets
- [ ] Application works on desktop
- [ ] Navigation is accessible on all devices
- [ ] Forms are usable on all devices

---

## 33. Example User Flows

### 33.1 New User Registration and First Conversion
1. User visits landing page
2. User clicks \"Boshlash\" or \"Register\" button
3. User fills registration form (email, name, password)
4. User accepts terms and submits
5. System creates account and redirects to login
6. User logs in with credentials
7. System redirects to user dashboard
8. User clicks \"Yangi konvertatsiya\" button
9. User enters equation or selects example
10. User clicks \"Convert\" button
11. System displays conversion result with steps
12. User clicks \"Save\" button
13. System saves to history and shows success message
14. User navigates to history page
15. User sees saved conversion in list

### 33.2 Admin Managing Users
1. Admin logs in with admin credentials
2. System redirects to admin dashboard
3. Admin sees platform statistics
4. Admin clicks \"Users\" in sidebar
5. Admin sees list of all users
6. Admin searches for specific user
7. Admin clicks on user row to view details
8. Admin clicks \"Edit\" button
9. Admin changes user role to ADMIN
10. Admin saves changes
11. System updates user role and logs action
12. Admin navigates to activity log
13. Admin sees logged action in activity feed

### 33.3 User Viewing Conversion History
1. User logs in
2. User navigates to dashboard
3. User clicks \"History\" in sidebar
4. System displays list of saved conversions
5. User filters by date range
6. System updates list with filtered results
7. User clicks on conversion to view details
8. System displays full conversion with steps
9. User clicks \"Delete\" button
10. System shows confirmation modal
11. User confirms deletion
12. System removes conversion and shows success message

---

## 34. Risks and Edge Cases

### 34.1 Security Risks
- **Risk:** Brute force attacks on login
  - **Mitigation:** Implement rate limiting
- **Risk:** SQL injection
  - **Mitigation:** Use parameterized queries (Prisma ORM)
- **Risk:** XSS attacks
  - **Mitigation:** Sanitize all inputs, use React's built-in XSS protection
- **Risk:** Unauthorized admin access
  - **Mitigation:** Strict role-based middleware, JWT verification

### 34.2 Data Integrity Risks
- **Risk:** User deletes account with conversion history
  - **Mitigation:** Cascade delete or soft delete with retention period
- **Risk:** Admin accidentally deletes active user
  - **Mitigation:** Confirmation modal, activity logging, backup strategy

### 34.3 Performance Risks
- **Risk:** Large conversion history slows down queries
  - **Mitigation:** Pagination, database indexing
- **Risk:** Complex equations take too long to convert
  - **Mitigation:** Set timeout limit, show loading state, optimize algorithm

### 34.4 Edge Cases

**Invalid Equation Input:**
- Empty input → Show validation error
- Malformed equation → Show friendly error message
- Unsupported functions (sin, cos) → Show error with supported format
- Division by zero → Handle gracefully in conversion engine

**User Account States:**
- Inactive user tries to login → Show \"Account deactivated\" message
- Deleted user's history → Cascade delete or anonymize
- User changes email to existing email → Show \"Email already exists\" error

**Admin Actions:**
- Admin tries to delete themselves → Prevent with error message
- Admin tries to demote last admin → Prevent with error message
- Admin views deleted user's activity → Show \"User deleted\" placeholder

**Session Management:**
- Token expires during active session → Redirect to login with message
- User logs in on multiple devices → Allow or implement single session (configurable)

**Conversion Engine:**
- Equation with no solution → Show \"No solution exists\" message
- Equation outside supported types → Show \"Unsupported equation type\" error
- Very long equation → Truncate display, allow full view on click

---

## 35. Future Improvements

### 35.1 Phase 2 Features
- Email verification on registration
- Two-factor authentication (2FA)
- Social login (Google, Facebook)
- Export conversion history to PDF
- Share conversions via link
- Collaborative features (teams, shared workspaces)

### 35.2 Phase 3 Features
- Mobile native applications (iOS, Android)
- Advanced graph plotting with interactive controls
- Support for 3D curves and surfaces
- LaTeX equation input support
- Batch conversion processing
- API access for third-party integrations

### 35.3 Educational Enhancements
- Interactive tutorials
- Video lessons on complex analysis
- Practice problems with solutions
- Gamification (badges, achievements)
- Progress tracking
- Integration with learning management systems (LMS)

### 35.4 Technical Improvements
- Microservices architecture
- GraphQL API
- Real-time collaboration with WebSockets
- Advanced caching with Redis
- Elasticsearch for advanced search
- Machine learning for equation recognition from images

---

## 36. Local Development Setup Instructions

### 36.1 Prerequisites
- Node.js 18+ installed
- PostgreSQL 14+ installed (or use Docker)
- Git installed
- Code editor (VS Code recommended)

### 36.2 Clone Repository
```bash
git clone https://github.com/yourusername/complexcurve-converter.git
cd complexcurve-converter
```

### 36.3 Backend Setup
```bash
cd backend
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your database credentials
# DATABASE_URL=postgresql://user:password@localhost:5432/complexcurve

# Run database migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed

# Start development server
npm run dev
```

Backend will run on http://localhost:5000

### 36.4 Frontend Setup
```bash
cd frontend
npm install

# Copy environment variables
cp .env.example .env

# Edit .env
# REACT_APP_API_URL=http://localhost:5000/api

# Start development server
npm start
```

Frontend will run on http://localhost:3000

### 36.5 Database Setup with Docker (Alternative)
```bash
# Create docker-compose.yml in project root
docker-compose up -d

# This will start PostgreSQL on localhost:5432
```

### 36.6 Create Admin User
```bash
# In backend directory
npx prisma studio

# Or use SQL
psql -d complexcurve
UPDATE users SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

### 36.7 Run Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

---

## 37. Production Deployment Instructions

### 37.1 Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd frontend
vercel --prod

# Set environment variables in Vercel dashboard
# REACT_APP_API_URL=https://api.complexcurve.com/api
```

### 37.2 Backend Deployment (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
cd backend
railway init

# Add PostgreSQL database
railway add postgresql

# Deploy
railway up

# Set environment variables in Railway dashboard
```

### 37.3 Database Migration in Production
```bash
# Run migrations
railway run npx prisma migrate deploy

# Or connect to production database
DATABASE_URL=\"postgresql://...\" npx prisma migrate deploy
```

### 37.4 SSL Configuration
- Vercel provides automatic SSL
- Railway provides automatic SSL
- Configure custom domain in platform dashboard

### 37.5 Environment Variables Checklist
**Backend:**
- [ ] DATABASE_URL
- [ ] JWT_SECRET (generate strong secret)
- [ ] NODE_ENV=production
- [ ] CORS_ORIGIN (frontend URL)
- [ ] EMAIL credentials (if using email features)

**Frontend:**
- [ ] REACT_APP_API_URL (backend URL)
- [ ] REACT_APP_ENV=production

---

## 38. Maintenance and Support

### 38.1 Regular Maintenance Tasks
- Monitor error logs daily
- Review user feedback weekly
- Update dependencies monthly
- Review security advisories
- Backup database daily
- Test backup restoration monthly

### 38.2 Performance Monitoring
- Monitor API response times
- Monitor database query performance
- Monitor server resource usage
- Set up alerts for downtime

### 38.3 User Support
- Provide contact email for support
- Create FAQ section
- Document common issues
- Respond to user inquiries within 24 hours

---

## 39. License and Credits

### 39.1 License
This project is developed as a university software engineering project.

### 39.2 Credits
- Project developed by [Your Name/Team]
- University: [University Name]
- Course: [Course Name]
- Instructor: [Instructor Name]
- Year: 2026

### 39.3 Acknowledgments
- Mathematical formulas based on complex analysis theory
- UI design inspired by modern SaaS platforms
- Open source libraries used (list major dependencies)

---

## 40. Contact and Support

### 40.1 Project Repository
GitHub: https://github.com/yourusername/complexcurve-converter

### 40.2 Documentation
Full documentation: [Link to docs]

### 40.3 Support
Email: support@complexcurve.com

### 40.4 Demo
Live demo: https://complexcurve.vercel.app

---

## Conclusion

This comprehensive specification document provides a complete blueprint for developing the ComplexCurve Converter platform. It covers all aspects from architecture and design to implementation details and deployment strategies. The document should serve as the primary reference for developers, designers, and stakeholders throughout the project lifecycle.

**Key Success Factors:**
- Clear separation of user and admin roles
- Robust authentication and authorization
- Accurate mathematical conversion engine
- Intuitive user interface
- Comprehensive admin tools
- Multilingual support
- Production-ready security measures
- Scalable architecture

**Next Steps:**
1. Review and approve this specification
2. Set up development environment
3. Initialize project repositories
4. Begin implementation following MVP scope
5. Conduct regular testing and code reviews
6. Deploy to staging for testing
7. Final deployment to production
8. Prepare for project defense presentation

Good luck with your university project! 🚀