import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChartConfiguration,  ChartType, Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { addDays, format, getDaysInMonth, startOfMonth, isSameMonth, isToday, addMonths, subMonths } from 'date-fns';

Chart.register(...registerables);

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  metrics = [
    {
      title: 'Students',
      value: '432',
      description: '+53 since the past 4 weeks',
      iconPath: '../../../assets/svg/studentdash.svg'
    },
    {
      title: 'Teacher',
      value: '17',
      description: '',
      iconPath: '../../../assets/svg/teacherdash.svg'
    },
    {
      title: 'Non-teaching Staff',
      value: '7',
      description: '',
      iconPath: '../../../assets/svg/nonstaffdash.svg'
    }
  ];

  // Chart data
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Students',
        data: [200, 400, 600, 800, 530, 700],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  public lineChartType = 'line' as const;

  // Calendar data
  currentDate = new Date();
  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  calendarDays: CalendarDay[] = [];

  constructor() {
    this.generateCalendar();
  }

  get currentMonthYear(): string {
    return format(this.currentDate, 'MMMM yyyy');
  }

  generateCalendar(): void {
    const startDate = startOfMonth(this.currentDate);
    const daysInMonth = getDaysInMonth(this.currentDate);
    const startDay = (startDate.getDay() + 6) % 7; // Adjust to make Monday first
    
    this.calendarDays = [];
    
    // Add days from previous month
    for (let i = 0; i < startDay; i++) {
      const date = addDays(startDate, - (startDay - i));
      this.addCalendarDay(date, false);
    }
    
    // Add current month days
    for (let i = 0; i < daysInMonth; i++) {
      const date = addDays(startDate, i);
      this.addCalendarDay(date, true);
    }
    
    // Add days from next month to complete 6 weeks
    const totalDays = startDay + daysInMonth;
    const remainingDays = totalDays <= 35 ? 35 - totalDays : 42 - totalDays;
    
    for (let i = 1; i <= remainingDays; i++) {
      const date = addDays(startDate, daysInMonth + i - 1);
      this.addCalendarDay(date, false);
    }
  }

  private addCalendarDay(date: Date, isCurrentMonth: boolean): void {
    this.calendarDays.push({
      date,
      day: date.getDate(),
      isCurrentMonth,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6
    });
  }

  nextMonth(): void {
    this.currentDate = addMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  prevMonth(): void {
    this.currentDate = subMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  // Announcements
  announcements = [
    {
      date: '01-05-2022',
      message: 'A Meeting Between Teachers and Parents to Discuss Academic Objectives and Collaborative Goals'
    },
    {
      date: '01-05-2022',
      message: 'A Meeting Between Teachers and Parents to Discuss Academic Objectives and Collaborative Goals'
    },
    {
      date: '01-05-2022',
      message: 'A Meeting Between Teachers and Parents to Discuss Academic Objectives and Collaborative Goals'
    }
  ];
}
