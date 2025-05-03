import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
      iconPath: '../../../assets/images/studentDash.png'
    },
    {
      title: 'Teacher',
      value: '17',
      description: '',
      iconPath: '../../../assets/images/teacherDash.png'
    },
    {
      title: 'Non-teaching Staff',
      value: '7',
      description: '',
      iconPath: '../../../assets/images/nonstaffDash.png'
    }
  ];


  chartData = {
    revenue: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [5000, 8000, 6000, 9000, 7000, 10000],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    teachers: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Teachers',
        data: [10, 12, 14, 15, 16, 17],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    students: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Students',
        data: [200, 400, 600, 800, 530, 700],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)',
        fill: true,
        tension: 0.4
      }]
    }
  };

  activeTab: 'revenue' | 'teachers' | 'students' = 'revenue';
  lineChartData = this.chartData.revenue;
  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } },
      x: { grid: { display: false } }
    }
  };
  lineChartType = 'line' as const;


  switchTab(tab: 'revenue' | 'teachers' | 'students') {
    this.activeTab = tab;
    this.lineChartData = this.chartData[tab];
  }



  
  // public lineChartData: ChartConfiguration<'line'>['data'] = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   datasets: [
  //     {
  //       label: 'Total Students',
  //       data: [200, 400, 600, 800, 530, 700],
  //       borderColor: '#4f46e5',
  //       backgroundColor: 'rgba(79,70,229,0.1)',
  //       fill: true,
  //       tension: 0.4,
  //     }
  //   ]
  // };

  // public lineChartOptions: ChartConfiguration<'line'>['options'] = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false
  //     }
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       ticks: {
  //         stepSize: 200
  //       },
  //       grid: {
  //         color: 'rgba(0, 0, 0, 0.05)'
  //       }
  //     },
  //     x: {
  //       grid: {
  //         display: false
  //       }
  //     }
  //   }
  // };

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
    const startDay = (startDate.getDay() + 6) % 7; 
    
    this.calendarDays = [];
    
    for (let i = 0; i < startDay; i++) {
      const date = addDays(startDate, - (startDay - i));
      this.addCalendarDay(date, false);
    }
    
    for (let i = 0; i < daysInMonth; i++) {
      const date = addDays(startDate, i);
      this.addCalendarDay(date, true);
    }
    
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
